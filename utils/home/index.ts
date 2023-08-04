export type CardTypes = {
    transaction: string,
    description: string,
    color: string
};

const cardData:CardTypes[] = [
    {description: "TOTAL TRANSACTION", transaction: "1,500", color: "0077B6"},
    {description: "AVERAGENORTH", transaction: "5,350", color: "0096C7"},
    {description: "TOTAL REVENUES", transaction: "₱ 25,325.00", color: "48CAE4"},
    {description: "AVERAGE REVENUE PER SUBSCRIPTION", transaction: "₱ 5,405.00", color: "90E0EF"}
];

export default cardData;
