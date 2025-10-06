import { TRANSACTION_TYPE } from "../../modules/dashboard/enums";
import { GetReportRequest } from "./get-report-request.interface";

export interface GetReportWeeklyRequest extends GetReportRequest {
	type: TRANSACTION_TYPE;
}