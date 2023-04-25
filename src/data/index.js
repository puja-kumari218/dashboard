
export const cardsData = [
  
  // OVERALL PORTFOLLIO
  
  {
    title: "My Balance",
    change: 24,
    amount: 4206900,
  },
  {
    title: "Investment",
    change: 28,
    amount: 2061900,
  },
  {
    title: "TotalGain",
    change: 22,
    amount: 86644400,
  },
  {
    title: "TotalLoss",
    change: 20,
    amount: 121200,
  },
];

export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};





  
  



