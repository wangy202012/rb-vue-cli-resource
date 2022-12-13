import { BASE_URL } from '@/utils/const'
// 上报预览
export function getReportPreview(id: string) {
    return fetch(BASE_URL + '/ice/api/incident/report/preview?incidentId=' + id).then(rst => rst.json());
}


// 提交数据
export function transferNotify(data: any, incidentId: string, reportId: string) {
    return fetch(BASE_URL + `/ice/api/incident/report?incidentId=${incidentId}&reportId=${reportId}`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(rst => rst.json());
}


// 上报记录
export function getReportRecordData(incidentId: string) {
    // pentaogn的fetch重写了
    return fetch(BASE_URL + `/ice/api/incident/report/history?incidentId=${incidentId}`).then(rst => rst.json());
}


