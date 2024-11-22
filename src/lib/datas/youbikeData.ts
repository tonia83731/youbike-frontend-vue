// const BASE_URL = 'https://tdx.transportdata.tw/api/basic'

// 取得指定[縣市]的公共自行車租借站位資料
// /v2/Bike/Station/City/{city}?select=StationUID,StationName,StationPosition&orderby=StationUID

// 取得動態指定[縣市]的公共自行車即時車位資料
// /v2/Bike/Availability/City/{city}?select=StationUID,2CAvailableRentBikes,2CAvailableReturnBikes&orderby=StationUID
type RentInfoType = {
  StationUID: string
  StationName: {
    Zh_tw: string
    En: string
  }
  StationPosition: {
    PositionLon: number
    PositionLat: number
    GeoHash: string
  }
  BikesCapacity: number
  ServiceType: number
  SrcUpdateTime: string
  UpdateTime: string
}
type RealtimeInfoType = {
  StationUID: string
  ServiceStatus: number
  ServiceType: number
  AvailableRentBikes: number
  AvailableReturnBikes: number
  SrcUpdateTime: string
  UpdateTime: string
}
const dummyRentInfo = [
  {
    StationUID: 'TPE500101001',
    StationName: {
      Zh_tw: 'YouBike2.0_捷運科技大樓站',
      En: 'YouBike2.0_MRT Technology Bldg. Sta.',
    },
    StationPosition: {
      PositionLon: 121.5436,
      PositionLat: 25.02605,
      GeoHash: 'wsqqmgc77',
    },
    BikesCapacity: 28,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:54:14+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101002',
    StationName: {
      Zh_tw: 'YouBike2.0_復興南路二段273號前',
      En: 'YouBike2.0_No.273, Sec. 2, Fuxing S. Rd.',
    },
    StationPosition: {
      PositionLon: 121.54357,
      PositionLat: 25.02565,
      GeoHash: 'wsqqmgc2f',
    },
    BikesCapacity: 21,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:53:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101003',
    StationName: {
      Zh_tw: 'YouBike2.0_國北教大實小東側門',
      En: 'YouBike2.0_NTUE Experiment Elementary School (East)',
    },
    StationPosition: {
      PositionLon: 121.54124,
      PositionLat: 25.02429,
      GeoHash: 'wsqqmex9h',
    },
    BikesCapacity: 16,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:54:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101004',
    StationName: {
      Zh_tw: 'YouBike2.0_和平公園東側',
      En: 'YouBike2.0_Heping Park (East)',
    },
    StationPosition: {
      PositionLon: 121.54282,
      PositionLat: 25.02351,
      GeoHash: 'wsqqmg2u8',
    },
    BikesCapacity: 11,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:51:16+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101005',
    StationName: {
      Zh_tw: 'YouBike2.0_辛亥復興路口西北側',
      En: 'YouBike2.0_Xinhai Fuxing Rd. Intersection (Northwest)',
    },
    StationPosition: {
      PositionLon: 121.54299,
      PositionLat: 25.02153,
      GeoHash: 'wsqqmg0bu',
    },
    BikesCapacity: 16,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:49:14+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101006',
    StationName: {
      Zh_tw: 'YouBike2.0_復興南路二段280號前',
      En: 'YouBike2.0_No. 280, Sec. 2, Fuxing S. Rd.',
    },
    StationPosition: {
      PositionLon: 121.54328,
      PositionLat: 25.02429,
      GeoHash: 'wsqqmg915',
    },
    BikesCapacity: 27,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:53:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101007',
    StationName: {
      Zh_tw: 'YouBike2.0_復興南路二段340巷口',
      En: 'YouBike2.0_Ln. 340, Sec. 2, Fuxing S. Rd.',
    },
    StationPosition: {
      PositionLon: 121.54326,
      PositionLat: 25.02253,
      GeoHash: 'wsqqmg1ng',
    },
    BikesCapacity: 11,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:54:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101008',
    StationName: {
      Zh_tw: 'YouBike2.0_新生南路三段52號前',
      En: 'YouBike2.0_No. 52, Sec. 3, Xinsheng S. Rd.',
    },
    StationPosition: {
      PositionLon: 121.53407,
      PositionLat: 25.02112,
      GeoHash: 'wsqqmdfqt',
    },
    BikesCapacity: 17,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:54:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101009',
    StationName: {
      Zh_tw: 'YouBike2.0_新生南路三段66號前',
      En: 'YouBike2.0_No. 66, Sec. 3, Xinsheng S. Rd.',
    },
    StationPosition: {
      PositionLon: 121.53384,
      PositionLat: 25.01976,
      GeoHash: 'wsqqmddnx',
    },
    BikesCapacity: 16,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:53:14+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101010',
    StationName: {
      Zh_tw: 'YouBike2.0_新生南路三段82號前',
      En: 'YouBike2.0_No. 82, Sec. 3, Xinsheng S. Rd.',
    },
    StationPosition: {
      PositionLon: 121.53361,
      PositionLat: 25.01894,
      GeoHash: 'wsqqmdd1f',
    },
    BikesCapacity: 20,
    ServiceType: 2,
    SrcUpdateTime: '2024-11-22T10:50:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
]
const dummyRealtimeInfo = [
  {
    StationUID: 'TPE500101001',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 2,
    AvailableReturnBikes: 26,
    SrcUpdateTime: '2024-11-22T10:54:14+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101002',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 2,
    AvailableReturnBikes: 19,
    SrcUpdateTime: '2024-11-22T10:53:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101003',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 9,
    AvailableReturnBikes: 7,
    SrcUpdateTime: '2024-11-22T10:54:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101004',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 1,
    AvailableReturnBikes: 10,
    SrcUpdateTime: '2024-11-22T10:51:16+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101005',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 1,
    AvailableReturnBikes: 14,
    SrcUpdateTime: '2024-11-22T10:49:14+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101006',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 1,
    AvailableReturnBikes: 26,
    SrcUpdateTime: '2024-11-22T10:53:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101007',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 2,
    AvailableReturnBikes: 9,
    SrcUpdateTime: '2024-11-22T10:54:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101008',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 2,
    AvailableReturnBikes: 14,
    SrcUpdateTime: '2024-11-22T10:54:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101009',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 2,
    AvailableReturnBikes: 14,
    SrcUpdateTime: '2024-11-22T10:53:14+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
  {
    StationUID: 'TPE500101010',
    ServiceStatus: 1,
    ServiceType: 2,
    AvailableRentBikes: 3,
    AvailableReturnBikes: 17,
    SrcUpdateTime: '2024-11-22T10:50:15+08:00',
    UpdateTime: '2024-11-22T10:54:48+08:00',
  },
]

const getYoubikeInfo = (rentInfo: RentInfoType[], realtimeInfo: RealtimeInfoType[]) => {
  const info = rentInfo.map((bike) => {
    const realtime = realtimeInfo.find((data) => data.StationUID === bike.StationUID)

    return {
      ...bike,
      AvailableRentBikes: realtime?.AvailableRentBikes || 0,
      AvailableReturnBikes: realtime?.AvailableReturnBikes || 0,
    }
  })
  return info
}

export const youbikeData = getYoubikeInfo(dummyRentInfo, dummyRealtimeInfo)
