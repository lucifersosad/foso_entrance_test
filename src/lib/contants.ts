export const FILTER_CATEGORY = {
  AIR_FILTER: {
    label: "Lọc gió Động cơ - Air Filter",
    value: "air_filter"
  },
  FUEL_FILTER: {
    label: "Lọc Nhiên Liệu - Fuel Filter",
    value: "fuel_filter"
  },
  OIL_FILTER: {
    label: "Bộ lọc dầu",
    value: "oil_filter"
  },
  NO_CLASS: {
    label: "Chưa phân loại",
    value: "no_class"
  },
  OTHER: {
    label: "Khác",
    value: "other"
  },
}

export const FILTER_PRICE: Record<string, any> = {
  MAX_100: {
    value: "max_100000",
    max: 100000,
  },
  MIN_100_MAX_300: {
    value: "min_100_max_300",
    min: 100000,
    max: 300000,
  },
  MIN_300_MAX_500: {
    value: "min_300_max_500",
    min: 300000,
    max: 500000,
  },
  MIN_500: {
    value: "min_500",
    min: 500000
  },
}

export const FILTER_BRAND = {
  ASAKASHI: {
    label: "Asakashi",
    value: "asakashi"
  },
  BOSCH: {
    label: "Bosch",
    value: "bosch"
  },
  HUYNDAI: {
    label: "Huyndai",
    value: "huyndai"
  },
}

export const FILTER_YEAR = {
  2021: {
    label: "2021",
    value: "2021"
  },
  2020: {
    label: "2020",
    value: "2020"
  },
  2019: {
    label: "2019",
    value: "2019"
  },
  2018: {
    label: "2018",
    value: "2018"
  },
}

export const FILTER_COUNTRY = {
  GERMANY: {
    label: "Đức",
    value: "germany"
  },
  JAPAN: {
    label: "Nhật Bản",
    value: "japan"
  },
  CHINA: {
    label: "Trung Quốc",
    value: "china"
  },
}

export const SORT = {
  RELEVANT: {
    label: "Liên quan",
    value: "relevant",
  },
  SALE: {
    label: "Bán chạy",
    value: "sell",
  },
  LATEST: {
    label: "Mới nhất",
    value: "latest",
  },
  FEATURED: {
    label: "Nổi bật",
    value: "featured",
  },
}