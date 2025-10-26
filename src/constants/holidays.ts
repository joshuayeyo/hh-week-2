// Record of major holidays by year
// 연도별 주요 공휴일 기록

export const HOLIDAY_RECORD = {
  '2025-01-01': '신정',
  '2025-01-29': '설날',
  '2025-01-30': '설날',
  '2025-01-31': '설날',
  '2025-03-01': '삼일절',
  '2025-05-05': '어린이날',
  '2025-06-06': '현충일',
  '2025-08-15': '광복절',
  '2025-10-05': '추석',
  '2025-10-06': '추석',
  '2025-10-07': '추석',
  '2025-10-03': '개천절',
  '2025-10-09': '한글날',
  '2025-12-25': '크리스마스',
};

export type HolidayRecord = typeof HOLIDAY_RECORD;
export type HolidayKeys = keyof HolidayRecord;
