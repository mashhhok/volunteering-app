interface SpendHistoryItem {
  id: string;
  mdx: string;
}


interface IRequest {
  id: string;
  companyName: string;
  date: string;
  requestTitle: string;
  imageUrl: string;
}

interface IFullRequest {
  id: string;
  companyName: string;
  date: string;
  requestTitle: string;
  imageUrl: string;
  collectedMoney: number;
  needMoney: number;
  spendHistory: SpendHistoryItem[];
}
