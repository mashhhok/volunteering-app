interface SpendHistoryItem {
  id: string;
  mdx: string;
  media: FileList
}

interface IFullRequest {
  id: string;
  companyName: string;
  date: string;
  requestTitle: string;
  imageUrl: string;
  collectedMoney: number;
  needMoney: number;
  donateCategory: string;
  spendHistory: SpendHistoryItem[];
  isCompleted: boolean
}


interface IRequest {
  id: string;
  date: string;
  requestTitle: string;
  isCompleted: boolean

  // данные юзера
  companyName: string;
  avatarUrl: string;
}

