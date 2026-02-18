var item data.Value[Item]

description := data.Map(item, func(item Item) string {
	return item.Description
})
price := data.Map(item, func(item Item) MoneyAmount {
	return item.Price
})
category := data.Map(item, func(item Item) ItemCategory {
	return item.Category
})
donation := data.Map(item, func(item Item) bool {
	return item.Donation
})
