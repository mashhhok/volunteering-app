interface SpendHistoryItem {
  id: string;
  mdx: string;
  media: FileList
}

interface IFullRequest {
  id: string;
  companyName: string;
  createdAt: string;
  requestTitle: string;
  imageUrl: string;
  collectedMoney: number;
  needMoney: number;
  donateCategory: string;
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

