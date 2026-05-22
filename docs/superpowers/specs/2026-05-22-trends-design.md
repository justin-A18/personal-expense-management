# Tendencias

## Objetivo

La vista de Tendencias debe ayudar al usuario a entender que esta cambiando en sus finanzas. No debe repetir Reportes. Reportes muestra historicos de ingresos y gastos; Tendencias muestra comparaciones, rankings y alertas accionables.

## Alcance del MVP

La primera version de Tendencias permite que el usuario seleccione un periodo actual y lo compare contra una de tres bases:

- Periodo anterior equivalente.
- Promedio de los ultimos 3 meses.
- Promedio de los ultimos 6 meses.

La vista debe mostrar:

- Resumen de ingresos, gastos y balance con variacion porcentual.
- Categorias de gasto con mayor crecimiento.
- Distribucion del gasto actual por categoria.
- Patron temporal del periodo actual.
- Insights simples generados por reglas.

## Comportamiento de comparacion

El usuario selecciona un rango actual con `from` y `to`. Luego elige un modo de comparacion:

- `previous_period`: compara el total del rango actual contra el total del periodo inmediatamente anterior con la misma duracion.
- `last_3_months`: compara el rango actual contra el promedio mensual de los 3 meses previos.
- `last_6_months`: compara el rango actual contra el promedio mensual de los 6 meses previos.

Para `last_3_months` y `last_6_months`, el backend debe devolver una base comparable como promedio mensual. No debe comparar el mes actual contra la suma de 3 o 6 meses porque eso distorsiona la variacion.

## Contrato backend

Endpoint propuesto:

```http
GET /reports/trends?walletId=&from=&to=&comparisonMode=
```

Valores validos de `comparisonMode`:

```ts
type TrendsComparisonMode = "previous_period" | "last_3_months" | "last_6_months";
```

Respuesta propuesta:

```ts
interface TrendsResponse {
  comparisonMode: TrendsComparisonMode;
  currentPeriod: {
    from: string;
    to: string;
  };
  comparisonPeriod: {
    from: string;
    to: string;
  };
  summary: {
    income: TrendMetric;
    expense: TrendMetric;
    balance: TrendMetric;
  };
  topGrowingCategories: TrendCategoryGrowth[];
  spendingDistribution: TrendCategoryDistribution[];
  temporalPattern: TrendTemporalPoint[];
  insights: TrendInsight[];
}

interface TrendMetric {
  current: number;
  baseline: number;
  changePercent: number | null;
}

interface TrendCategoryGrowth {
  categoryId: string;
  categoryName: string;
  type: "Gasto" | "Ingreso";
  currentAmount: number;
  baselineAmount: number;
  changePercent: number | null;
}

interface TrendCategoryDistribution {
  categoryId: string;
  categoryName: string;
  amount: number;
  percentage: number;
}

interface TrendTemporalPoint {
  label: string;
  income: number;
  expense: number;
}

interface TrendInsight {
  type: "success" | "warning" | "danger" | "info";
  title: string;
  description: string;
}
```

`changePercent` debe ser `null` cuando no exista baseline o cuando el baseline sea cero. El frontend debe mostrar "Sin comparacion" en ese caso.

## UI propuesta

La vista vive en:

```txt
/wallets/[id]/trends
```

El sidebar debe cambiar Tendencias de `/example3` a `/trends`.

Estructura visual:

1. Header de pagina con titulo "Tendencias" y descripcion corta.
2. Panel de filtros con rango actual y selector de comparacion:
   - Periodo anterior.
   - Ultimos 3 meses.
   - Ultimos 6 meses.
3. Tres cards de resumen:
   - Ingresos.
   - Gastos.
   - Balance.
4. Grafico o lista de categorias con mayor crecimiento.
5. Grafico de distribucion del gasto por categoria.
6. Grafico de patron temporal.
7. Lista de insights.

## Reglas de insights

El backend puede empezar con reglas simples:

- Si `expense.changePercent >= 20`, crear alerta de gasto acelerado.
- Si `balance.changePercent <= -20`, crear alerta de balance en descenso.
- Si una categoria de gasto crece `>= 30`, crear insight de categoria con crecimiento alto.
- Si `income.changePercent >= 10`, crear insight positivo de ingresos.
- Si no hay datos suficientes, crear insight informativo indicando que hacen falta mas movimientos.

## Estados del frontend

La vista debe contemplar:

- Loading mientras se carga el endpoint.
- Empty state cuando no hay movimientos en el periodo actual.
- Estado sin comparacion cuando el baseline es cero o insuficiente.
- Error state si el endpoint falla.

## Fuera de alcance

No se incluye en el MVP:

- Presupuestos por categoria.
- Predicciones futuras.
- Recomendaciones generadas con IA.
- Comparacion entre wallets.
- Exportacion de tendencias.

## Criterios de aceptacion

- El usuario puede elegir entre periodo anterior, ultimos 3 meses y ultimos 6 meses.
- El frontend envia `comparisonMode` al backend.
- Los modos de 3 y 6 meses usan promedio mensual como baseline.
- Las cards muestran valor actual, variacion porcentual y texto contextual del modo elegido.
- Si no hay baseline valido, la UI no muestra porcentajes falsos.
- Tendencias queda separada conceptualmente de Reportes.
