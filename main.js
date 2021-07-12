const express = require('express')
var cors = require('cors');
const app = express()
const port = 3000
app.use(cors());
app.get('/', (req, res) => {
  res.send({
	products: [
		{
			name: "Apple Iphone",
			price: 5000,
		},
				{
			name: "Macbook",
			price: 15000,
		}
	]
  })
})

app.get('/', (req, res) => {
  res.send({
	menuItems: [
		{
			itemId: "dashboard",
			itemName: "Dashboard",
			icon: "https://github.com/DharanaDinindu/mycro-frontend/blob/main/MycroClient/assets/icons/speedometer2.svg"
		},
			{
			itemId: "orders",
			itemName: "All Orders",
			icon: "https://github.com/DharanaDinindu/mycro-frontend/blob/main/MycroClient/assets/icons/bag-check.svg"
		}
	]
  })
})

app.listen(port, () => {
  console.log(`Mycro backend API listening at http://localhost:${port}`)
})