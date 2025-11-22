
import logoImage from '../assets/images/logo.png'

interface MenuProps {
  onBack?: () => void
}

const mashrouhaItems = [
  { name: 'زعتر', nameEn: 'Za\'atar', price: '100.000' },
  { name: 'كوكتيل', nameEn: 'Cocktail', price: '220.000' },
  { name: 'كشك', nameEn: 'Kishk', price: '250.000' },
  { name: 'جبنة', nameEn: 'Cheese', price: '330.000' },
  { name: 'محمرة', nameEn: 'Muhammara', price: '390.000' },
  { name: 'قشقوان', nameEn: 'Kashkaval', price: '390.000' },
  { name: 'لحمة', nameEn: 'Meat', price: '330.000' },
  { name: 'مرتديلا', nameEn: 'Mortadella', price: '470.000' },
  { name: 'حبش', nameEn: 'Turkey', price: '470.000' },
  { name: 'خضرة للمشروحة', nameEn: 'Vegetables for Mashrouha', price: '30.000' },
]

const sawariyehItems = [
  { name: 'حبة بيتزا', nameEn: 'Pizza Slice', price: null },
  { name: 'دزينة معجنات مشكلة', nameEn: 'Dozen Mixed Pastries', price: null },
  { name: 'دزينة بعلبكية', nameEn: 'Dozen Baalbakiyya', price: null },
  { name: 'دزينة بيتزا', nameEn: 'Dozen Pizza', price: null },
  { name: 'دزينة جبنة', nameEn: 'Dozen Cheese', price: null },
  { name: 'دزينة جبنة حرة', nameEn: 'Dozen Spicy Cheese', price: null },
  { name: 'دزينة سجق', nameEn: 'Dozen Sujok', price: null },
  { name: 'دزينة رول جبنة', nameEn: 'Dozen Cheese Roll', price: null },
  { name: 'دزينة رول سجق وجبنة', nameEn: 'Dozen Sujok and Cheese Roll', price: null },
  { name: 'دزينة هوت دوغ', nameEn: 'Dozen Hot Dog', price: null },
  { name: 'دزينة رول زعتر', nameEn: 'Dozen Za\'atar Roll', price: null },
  { name: 'دزينة رول فشقوان', nameEn: 'Dozen Kashkaval Roll', price: null },
  { name: 'دزينة دجاج', nameEn: 'Dozen Chicken', price: null },
  { name: 'دزينة فاهيتا', nameEn: 'Dozen Fajita', price: null },
  { name: 'دزينة زعتر', nameEn: 'Dozen Za\'atar', price: null },
  { name: 'دزينة سبانخ', nameEn: 'Dozen Spinach', price: null },
  { name: 'دزينة سبانخ بالزيت', nameEn: 'Dozen Spinach with Oil', price: null },
  { name: 'دزينة فينا', nameEn: 'Dozen Fina', price: null },
  { name: 'دزينة شاورما', nameEn: 'Dozen Shawarma', price: null },
  { name: 'دزينة سمبوسك لحمة', nameEn: 'Dozen Meat Sambousek', price: null },
  { name: 'دزينة رفاقات جبنة', nameEn: 'Dozen Cheese Rafaqat', price: null },
]

const italianPizzaItems = [
  { name: 'Vegetarian Pizza', nameEn: 'Vegetarian Pizza', price: null },
  { name: 'Truffle Pizza', nameEn: 'Truffle Pizza', price: null },
  { name: 'Greek Pizza', nameEn: 'Greek Pizza', price: null },
  { name: 'Margherita Pizza', nameEn: 'Margherita Pizza', price: null },
  { name: 'Traditional Pizza', nameEn: 'Traditional Pizza', price: null },
  { name: 'Mexican Pizza', nameEn: 'Mexican Pizza', price: null },
  { name: 'Pepperoni Pizza', nameEn: 'Pepperoni Pizza', price: null },
  { name: 'Pizza Burrata', nameEn: 'Pizza Burrata', price: null },
  { name: 'Fajita Pizza', nameEn: 'Fajita Pizza', price: null },
]

const asrouniyehItems = [
  { name: 'كعكة عصرونية سادة', nameEn: 'Plain Kaak Asrouni', price: '80.000' },
  { name: 'كعكة رغيف سادة', nameEn: 'Plain Loaf Kaak Asrouni', price: '65.000' },
  { name: 'عصرونية حبش وقشقوان', nameEn: 'Kaak with Turkey and Kashkaval', price: '350.000' },
  { name: 'عصرونية عكاوي', nameEn: 'Kaak with Akawi Cheese', price: '250.000' },
  { name: 'عصرونية عكاوي وقشقوان', nameEn: 'Kaak with Akawi and Kashkaval', price: '250.000' },
  { name: 'عصرونية سجق', nameEn: 'Kaak with Sujuk', price: '290.000' },
  { name: 'عصرونية بيكون', nameEn: 'Kaak with Bacon', price: '230.000' },
  { name: 'عصرونية بيكون اكسترا', nameEn: 'Kaak with Extra Bacon', price: '250.000' },
  { name: 'عصرونية مرتديلا', nameEn: 'Kaak with Mortadella', price: '310.000' },
  { name: 'عصرونية ثلاثة انواع جبنة', nameEn: 'Kaak with Three Types of Cheese', price: '340.000' },
  { name: 'عصرونية زعتر', nameEn: 'Kaak with Za\'atar', price: '130.000' },
  { name: 'عصرونية فينا', nameEn: 'Kaak with Vienna Sausage', price: '240.000' },
]

const ifranjiItems = [
  { name: 'Burger Bun', nameEn: 'Burger Bun', price: null },
  { name: 'Fahita Sub', nameEn: 'Fajita Sub', price: null },
  { name: 'Hot Dog Bun', nameEn: 'Hot Dog Bun', price: null },
  { name: 'Samoon', nameEn: 'Samoon', price: null },
  { name: 'Baguette bl Chmandar', nameEn: 'Baguette with Chmandar', price: '30.000' },
  { name: 'Baguette bl Zaatar', nameEn: 'Baguette with Za\'atar', price: '100.000' },
  { name: 'Baguette bl Jebne', nameEn: 'Baguette with Cheese', price: '120.000' },
  { name: 'Baguette bl Sbenegh', nameEn: 'Baguette with Spinach', price: '100.000' },
  { name: 'Baguette Briochee', nameEn: 'Brioche Baguette', price: '25.000' },
  { name: 'Brioche au Chocolat', nameEn: 'Chocolate Brioche', price: '25.000' },
  { name: 'Brioche au Coconut', nameEn: 'Coconut Brioche', price: '75.000' },
  { name: 'Brown Baguette', nameEn: 'Brown Baguette', price: '130.000' },
  { name: 'Brown Toast', nameEn: 'Brown Toast', price: '60.000' },
  { name: 'Burger Briochee', nameEn: 'Brioche Burger Bun', price: '70.000' },
  { name: 'Pain au Cacao', nameEn: 'Cocoa Bread', price: '150.000' },
  { name: 'Chabata White', nameEn: 'White Ciabatta', price: '25.000' },
  { name: 'Chabata Brown', nameEn: 'Brown Ciabatta', price: '70.000' },
  { name: 'Canape Toast', nameEn: 'Canape Toast', price: '55.000' },
  { name: 'Multicereal Toast', nameEn: 'Multicereal Toast', price: '65.000' },
  { name: 'Pain au Café', nameEn: 'Coffee Bread', price: '60.000' },
  { name: 'White Baguette', nameEn: 'White Baguette', price: null },
  { name: 'White Toast', nameEn: 'White Toast', price: null },
  { name: 'Olive Bread', nameEn: 'Olive Bread', price: null },
  { name: 'Pain au Chocolat', nameEn: 'Chocolate Bread', price: null },
  { name: 'Pain au Nescafe', nameEn: 'Nescafe Bread', price: null },
]

const petitFourItems = [
  { name: 'Sable Flower Milk Pistachio', nameEn: 'Sable Flower Milk Pistachio', price: null },
  { name: 'Sable Flower Milk Almond', nameEn: 'Sable Flower Milk Almond', price: null },
  { name: 'Sable Milk Vermiselle', nameEn: 'Sable Milk Vermiselle', price: null },
  { name: 'Sable Dipped in Milk', nameEn: 'Sable Dipped in Milk', price: null },
  { name: 'Sable Dipped in Chocolat', nameEn: 'Sable Dipped in Chocolate', price: null },
  { name: 'Sable Chocolat with Almond', nameEn: 'Sable Chocolate with Almond', price: null },
  { name: 'Sable Flower Vermiselle Chocolat', nameEn: 'Sable Flower Vermiselle Chocolate', price: null },
  { name: 'Sable Milk دمعة', nameEn: 'Sable Milk Tear Drop', price: null },
  { name: 'Sable Chocolat دمعة', nameEn: 'Sable Chocolate Tear Drop', price: null },
  { name: 'Cup Milk Almond', nameEn: 'Cup Milk Almond', price: null },
  { name: 'Cup Chocolat Hazelnut', nameEn: 'Cup Chocolate Hazelnut', price: null },
  { name: 'Mahachi Kinder', nameEn: 'Mahachi Kinder', price: null },
  { name: 'Mahachi Snickers', nameEn: 'Mahachi Snickers', price: null },
  { name: 'Mahachi Lotus', nameEn: 'Mahachi Lotus', price: null },
  { name: 'Mahachi Oreo', nameEn: 'Mahachi Oreo', price: null },
  { name: 'Lazy Cajo', nameEn: 'Lazy Cajo', price: null },
  { name: 'Lazy Cake', nameEn: 'Lazy Cake', price: null },
  { name: 'Tarte Milk', nameEn: 'Tarte Milk', price: null },
  { name: 'Tarte Chocolat', nameEn: 'Tarte Chocolate', price: null },
  { name: 'Mahachi Caramel with Almond', nameEn: 'Mahachi Caramel with Almond', price: null },
  { name: 'Mahachi Chocolat with Hazelnut', nameEn: 'Mahachi Chocolate with Hazelnut', price: null },
  { name: 'Mahachi Coconut with Milk', nameEn: 'Mahachi Coconut with Milk', price: null },
  { name: 'Chocolat Dubai', nameEn: 'Chocolate Dubai', price: null },
  { name: 'Truffle Lotus', nameEn: 'Truffle Lotus', price: null },
  { name: 'Truffle Oreo', nameEn: 'Truffle Oreo', price: null },
  { name: 'Truffle Chocolat', nameEn: 'Truffle Chocolate', price: null },
  { name: 'Truffle Mistiki', nameEn: 'Truffle Mistiki', price: null },
  { name: 'Fingers Coconut Truffle', nameEn: 'Fingers Coconut Truffle', price: null },
  { name: 'Truffle Nescafe', nameEn: 'Truffle Nescafe', price: null },
  { name: 'Milk Finger', nameEn: 'Milk Finger', price: null },
  { name: 'Chocolat Finger', nameEn: 'Chocolate Finger', price: null },
  { name: 'Boule Milk', nameEn: 'Boule Milk', price: null },
  { name: 'Boule Chocolat', nameEn: 'Boule Chocolate', price: null },
]

const cakeItems = [
  { name: 'Pistachio Cake', nameEn: 'Pistachio Cake', price: null },
  { name: 'Oreo Cake', nameEn: 'Oreo Cake', price: null },
  { name: 'Nutella Cake', nameEn: 'Nutella Cake', price: null },
  { name: 'Lotus', nameEn: 'Lotus', price: null },
  { name: 'Mosaic Cake', nameEn: 'Mosaic Cake', price: null },
  { name: 'Lazy Cake', nameEn: 'Lazy Cake', price: null },
  { name: 'Fraisier Cake', nameEn: 'Fraisier Cake', price: null },
  { name: 'Foret Noire', nameEn: 'Foret Noire', price: null },
  { name: 'Foret Blanche', nameEn: 'Foret Blanche', price: null },
  { name: 'Chocolate Cake', nameEn: 'Chocolate Cake', price: null },
  { name: 'Bahamas Cake', nameEn: 'Bahamas Cake', price: null },
  { name: 'Caramel Cake', nameEn: 'Caramel Cake', price: null },
  { name: 'Choco Fraisier', nameEn: 'Choco Fraisier', price: null },
  { name: 'Tarte Exotic', nameEn: 'Tarte Exotic', price: null },
  { name: 'Tarte Fraise', nameEn: 'Tarte Fraise', price: null },
  { name: 'Cheese Cake Blueberry', nameEn: 'Cheese Cake Blueberry', price: null },
  { name: 'Cheese Cake Strawberry', nameEn: 'Cheese Cake Strawberry', price: null },
  { name: 'Cheese Lemon', nameEn: 'Cheese Lemon', price: null },
  { name: 'Cheese Cake Passion Fruit', nameEn: 'Cheese Cake Passion Fruit', price: null },
  { name: 'Pineapple Cake', nameEn: 'Pineapple Cake', price: null },
  { name: 'Cortina Cake', nameEn: 'Cortina Cake', price: null },
  { name: 'Choco Almond', nameEn: 'Choco Almond', price: null },
  { name: 'Red Velvet', nameEn: 'Red Velvet', price: null },
  { name: 'Bowntie', nameEn: 'Bowntie', price: null },
  { name: 'Boule', nameEn: 'Boule', price: null },
  { name: 'Snickers', nameEn: 'Snickers', price: null },
  { name: 'Snickers Bar', nameEn: 'Snickers Bar', price: null },
  { name: 'Eclaire Dubai', nameEn: 'Eclaire Dubai', price: null },
  { name: 'Eclaire Nutella', nameEn: 'Eclaire Nutella', price: null },
  { name: 'Eclaire Vanille', nameEn: 'Eclaire Vanille', price: null },
  { name: 'Eclaire Chocolat', nameEn: 'Eclaire Chocolate', price: null },
  { name: 'Eclaire Mexicana', nameEn: 'Eclaire Mexicana', price: null },
  { name: 'Eclaire Caramel', nameEn: 'Eclaire Caramel', price: null },
  { name: 'Triple Choco', nameEn: 'Triple Choco', price: null },
  { name: 'Opera', nameEn: 'Opera', price: null },
  { name: 'Muffin Choco', nameEn: 'Muffin Choco', price: null },
  { name: 'Muffin Vanille', nameEn: 'Muffin Vanille', price: null },
]

const croissantItems = [
  { name: 'Croissant Plain', nameEn: 'Croissant Plain', price: null },
  { name: 'Croissant Zaatar', nameEn: 'Croissant Za\'atar', price: null },
  { name: 'Croissant Cheese', nameEn: 'Croissant Cheese', price: null },
  { name: 'Croissant Nutella', nameEn: 'Croissant Nutella', price: null },
  { name: 'Croissant Almond', nameEn: 'Croissant Almond', price: null },
  { name: 'Croissant Blueberry', nameEn: 'Croissant Blueberry', price: null },
  { name: 'Croissant Butter and Jam', nameEn: 'Croissant Butter and Jam', price: null },
  { name: 'Croissant Caramel', nameEn: 'Croissant Caramel', price: null },
  { name: 'Croissant Kneffe Cheese', nameEn: 'Croissant Kneffe Cheese', price: null },
  { name: 'Croissant Kneffe Ashta', nameEn: 'Croissant Kneffe Ashta', price: null },
  { name: 'Croissant Pistachio', nameEn: 'Croissant Pistachio', price: null },
  { name: 'Croissant Raspberry', nameEn: 'Croissant Raspberry', price: null },
  { name: 'Croissant Strawberry', nameEn: 'Croissant Strawberry', price: null },
  { name: 'New Yorker Pistachio', nameEn: 'New Yorker Pistachio', price: null },
  { name: 'New Yorker Chocolate', nameEn: 'New Yorker Chocolate', price: null },
  { name: 'New Yorker Lotus', nameEn: 'New Yorker Lotus', price: null },
  { name: 'New Yorker Oreo', nameEn: 'New Yorker Oreo', price: null },
  { name: 'New Yorker Strawberry', nameEn: 'New Yorker Strawberry', price: null },
]

const kaakItems = [
  { name: 'Kaak Asir 500g', nameEn: 'Kaak Asir 500g', price: '120.000' },
  { name: 'Kaak Tawil 500g', nameEn: 'Kaak Tawil 500g', price: '130.000' },
  { name: 'Kaak b Halib 200g', nameEn: 'Kaak with Milk 200g', price: '130.000' },
  { name: 'Kaak Cheese', nameEn: 'Kaak Cheese', price: '120.000' },
  { name: 'Kaak Zaatar', nameEn: 'Kaak Za\'atar', price: '160.000' },
  { name: 'Kaak Multicereal', nameEn: 'Kaak Multicereal', price: '140.000' },
  { name: 'Kaak Chami', nameEn: 'Kaak Chami', price: '160.000' },
  { name: 'Kaak Kerkachli', nameEn: 'Kaak Kerkachli', price: '100.000' },
  { name: 'Kaak Mdawar', nameEn: 'Kaak Mdawar', price: '200.000' },
  { name: 'Kaak Extra 350g', nameEn: 'Kaak Extra 350g', price: '170.000' },
  { name: 'Kaak Extra 500g', nameEn: 'Kaak Extra 500g', price: null },
  { name: 'Crackers BBQ', nameEn: 'Crackers BBQ', price: null },
  { name: 'Crackers Ketchup', nameEn: 'Crackers Ketchup', price: null },
  { name: 'Crackers Chicken Flavor', nameEn: 'Crackers Chicken Flavor', price: null },
  { name: 'Crackers Pizza', nameEn: 'Crackers Pizza', price: null },
  { name: 'Crackers Vinegar', nameEn: 'Crackers Vinegar', price: null },
  { name: 'Crackers Cheese', nameEn: 'Crackers Cheese', price: null },
  { name: 'Crackers Zaatar', nameEn: 'Crackers Za\'atar', price: null },
  { name: 'Anis Kaak', nameEn: 'Anis Kaak', price: null },
  { name: 'Kaak Asir 350g', nameEn: 'Kaak Asir 350g', price: null },
  { name: 'Kaak Tawil 350g', nameEn: 'Kaak Tawil 350g', price: null },
  { name: 'Kaak b Halib 400g', nameEn: 'Kaak with Milk 400g', price: null },
  { name: 'Kaak Fingers', nameEn: 'Kaak Fingers', price: null },
]

const donutsItems = [
  { name: 'دوناتس سادة', nameEn: 'Plain Donuts', price: null },
  { name: 'Donut Limon', nameEn: 'Donut Lemon', price: null },
  { name: 'Donut Oreo', nameEn: 'Donut Oreo', price: null },
  { name: 'Donut Caramel', nameEn: 'Donut Caramel', price: null },
  { name: 'Donut Lotus', nameEn: 'Donut Lotus', price: null },
  { name: 'Donut Strawberry', nameEn: 'Donut Strawberry', price: null },
  { name: 'Bahamas Donuts', nameEn: 'Bahamas Donuts', price: null },
  { name: 'Donut Milk Chocolate', nameEn: 'Donut Milk Chocolate', price: null },
  { name: 'Donut White Chocolate', nameEn: 'Donut White Chocolate', price: null },
  { name: 'Donut Dark Chocolate', nameEn: 'Donut Dark Chocolate', price: null },
  { name: 'Donut Nutella', nameEn: 'Donut Nutella', price: null },
  { name: 'KitKat Donut', nameEn: 'KitKat Donut', price: null },
  { name: 'Orange Donut', nameEn: 'Orange Donut', price: null },
]

const boozaItems = [
  { name: 'ليموناضة صغير', nameEn: 'Lemonade Small', price: null },
  { name: 'ليموناضة وسط', nameEn: 'Lemonade Medium', price: null },
  { name: 'ليموناضة كبير', nameEn: 'Lemonade Large', price: null },
  { name: 'فريسكو صغير', nameEn: 'Fresco Small', price: null },
  { name: 'فريسكو وسط', nameEn: 'Fresco Medium', price: null },
  { name: 'فريسكو كبير', nameEn: 'Fresco Large', price: null },
  { name: 'فريسكو مع ايس كريم صغير', nameEn: 'Fresco with Ice Cream Small', price: null },
  { name: 'فريسكو مع ايس كريم وسط', nameEn: 'Fresco with Ice Cream Medium', price: null },
  { name: 'فريسكو مع ايس كريم كبير', nameEn: 'Fresco with Ice Cream Large', price: null },
  { name: '1 scoop ice cream', nameEn: '1 Scoop Ice Cream', price: null },
  { name: '1 scoop ice cream italian', nameEn: '1 Scoop Ice Cream Italian', price: null },
]

const saladeItems = [
  { name: 'Fatoush', nameEn: 'Fatoush', price: null },
  { name: 'Pasta Tuna Salade', nameEn: 'Pasta Tuna Salade', price: null },
  { name: 'Quinoa Salade', nameEn: 'Quinoa Salade', price: null },
  { name: 'Cesar Salade with Chicken or Without', nameEn: 'Caesar Salade with Chicken or Without', price: null },
  { name: 'Rocca Salade شمندر', nameEn: 'Rocca Salade with Beetroot', price: null },
]

const pastaItems = [
  { name: 'Truffle Pasta', nameEn: 'Truffle Pasta', price: null },
  { name: 'Penne Pesto Pasta', nameEn: 'Penne Pesto Pasta', price: null },
  { name: 'Penne Arabiata', nameEn: 'Penne Arabiata', price: null },
  { name: 'Fettuccini White Sauce with Chicken or Without Chicken', nameEn: 'Fettuccini White Sauce with Chicken or Without Chicken', price: null },
]

const hotSandwichesItems = [
  { name: 'Steak Sandwich', nameEn: 'Steak Sandwich', price: null },
  { name: 'Chicken Sandwich', nameEn: 'Chicken Sandwich', price: null },
  { name: 'Fahita', nameEn: 'Fajita Sandwich', price: null },
  { name: 'Mexican Sandwich', nameEn: 'Mexican Sandwich', price: null },
  { name: 'Specialite L\'etoile', nameEn: 'L\'etoile Specialty Sandwich', price: null },
  { name: 'Club Sandwich', nameEn: 'Club Sandwich', price: null },
]

const baguetteSandwichesItems = [
  { name: 'لبنة', nameEn: 'Labneh', price: null },
  { name: 'Tuna', nameEn: 'Tuna', price: null },
  { name: 'قشقوان', nameEn: 'Kashkaval', price: null },
  { name: 'Halloumi Tapenade', nameEn: 'Halloumi Tapenade', price: null },
  { name: 'Turkey and Cheese', nameEn: 'Turkey and Cheese', price: null },
  { name: 'Crab', nameEn: 'Crab', price: null },
]

const startersItems = [
  { name: 'Fries', nameEn: 'Fries', price: null },
  { name: 'Curly Fries', nameEn: 'Curly Fries', price: null },
  { name: 'Wedges', nameEn: 'Wedges', price: null },
  { name: 'Balls Jalapeno Cheese', nameEn: 'Jalapeno Cheese Balls', price: null },
  { name: 'Chicken Strips', nameEn: 'Chicken Strips', price: null },
  { name: 'Mozzarella Stick', nameEn: 'Mozzarella Stick', price: null },
  { name: 'Crispy Chicken with Fries', nameEn: 'Crispy Chicken with Fries', price: null },
]

const breakfastItems = [
  { name: 'جبنة حلوم', nameEn: 'Halloumi Cheese', price: null },
  { name: 'جبنة عكاوي', nameEn: 'Akawi Cheese', price: null },
  { name: 'قشقوان', nameEn: 'Kashkaval', price: null },
  { name: 'مرتديلا', nameEn: 'Mortadella', price: null },
  { name: 'حبش', nameEn: 'Turkey', price: null },
  { name: 'مكدوس', nameEn: 'Makdous', price: null },
  { name: 'اومليت', nameEn: 'Omelette', price: null },
  { name: 'مربي', nameEn: 'Jam', price: null },
  { name: 'زعتر', nameEn: 'Za\'atar', price: null },
  { name: 'زعتر حلبي', nameEn: 'Aleppo Za\'atar', price: null },
  { name: 'لبنة بلدية', nameEn: 'Baladi Labneh', price: null },
  { name: 'لبنة مع خضرة', nameEn: 'Labneh with Vegetables', price: null },
  { name: 'قريشة بلدية', nameEn: 'Baladi Quraisha', price: null },
  { name: 'لبنة حرة', nameEn: 'Spicy Labneh', price: null },
  { name: 'كشك', nameEn: 'Kishk', price: null },
  { name: 'جبنة حالوم مشوي', nameEn: 'Grilled Halloumi Cheese', price: null },
  { name: 'جبنة مشكلة', nameEn: 'Mixed Cheese', price: null },
  { name: 'بيض عيون', nameEn: 'Sunny Side Up Eggs', price: null },
  { name: 'بيض مخفوق', nameEn: 'Scrambled Eggs', price: null },
  { name: 'بيض مع سحق', nameEn: 'Eggs with Sujuk', price: null },
  { name: 'بيض مع حالوم', nameEn: 'Eggs with Halloumi', price: null },
]

export function Menu({ onBack: _onBack }: MenuProps) {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="wordmark">
          <img 
            src={logoImage} 
            alt="L'ETOILE Logo" 
            style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <nav className="primary-nav" aria-label="Primary">
          <a href="#mashrouha" onClick={(e) => { e.preventDefault(); document.getElementById('mashrouha')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Mashrouha
          </a>
          <a href="#sawariyeh" onClick={(e) => { e.preventDefault(); document.getElementById('sawariyeh')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Sawariyeh
          </a>
          <a href="#italian-pizza" onClick={(e) => { e.preventDefault(); document.getElementById('italian-pizza')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Italian Pizza
          </a>
          <a href="#asrouniyeh" onClick={(e) => { e.preventDefault(); document.getElementById('asrouniyeh')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Kaak Asrouni
          </a>
          <a href="#ifranji" onClick={(e) => { e.preventDefault(); document.getElementById('ifranji')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Ifranji
          </a>
          <a href="#petit-four" onClick={(e) => { e.preventDefault(); document.getElementById('petit-four')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Petit Four
          </a>
          <a href="#cake" onClick={(e) => { e.preventDefault(); document.getElementById('cake')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Cake
          </a>
          <a href="#croissant" onClick={(e) => { e.preventDefault(); document.getElementById('croissant')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Croissant
          </a>
          <a href="#kaak" onClick={(e) => { e.preventDefault(); document.getElementById('kaak')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Kaak
          </a>
          <a href="#donuts" onClick={(e) => { e.preventDefault(); document.getElementById('donuts')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Donuts
          </a>
          <a href="#booza" onClick={(e) => { e.preventDefault(); document.getElementById('booza')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Ice Cream
          </a>
          <a href="#salade" onClick={(e) => { e.preventDefault(); document.getElementById('salade')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Salad
          </a>
          <a href="#pasta" onClick={(e) => { e.preventDefault(); document.getElementById('pasta')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Pasta
          </a>
          <a href="#hot-sandwiches" onClick={(e) => { e.preventDefault(); document.getElementById('hot-sandwiches')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Hot Sandwiches
          </a>
          <a href="#baguette-sandwiches" onClick={(e) => { e.preventDefault(); document.getElementById('baguette-sandwiches')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Baguette Sandwiches
          </a>
          <a href="#starters" onClick={(e) => { e.preventDefault(); document.getElementById('starters')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Starters
          </a>
          <a href="#breakfast" onClick={(e) => { e.preventDefault(); document.getElementById('breakfast')?.scrollIntoView({ behavior: 'smooth' }) }}>
            L&apos;ETOILE Breakfast
          </a>
        </nav>
      </header>

      <main>
        <section className="menu-page">
          <div className="menu-page-header">
            <h1>Our Menu</h1>
            <p className="menu-page-subtitle">Discover our authentic Lebanese flavors</p>
          </div>

          <div className="menu-categories">
            <div id="mashrouha" className="menu-category">
              <h2 className="category-title">مشروحة</h2>
              <p className="category-subtitle">Mashrouha</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mashrouhaItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price} <span className="currency">ل.ل.</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="sawariyeh" className="menu-category">
              <h2 className="category-title">سواريه</h2>
              <p className="category-subtitle">Sawariyeh</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sawariyehItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="italian-pizza" className="menu-category">
              <h2 className="category-title">بيتزا ايطالية</h2>
              <p className="category-subtitle">Italian Pizza</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {italianPizzaItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="asrouniyeh" className="menu-category">
              <h2 className="category-title">كعكة عصرونية</h2>
              <p className="category-subtitle">Kaak Asrouni</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {asrouniyehItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price} <span className="currency">ل.ل.</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="ifranji" className="menu-category">
              <h2 className="category-title">إفرنجي</h2>
              <p className="category-subtitle">Ifranji</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ifranjiItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="petit-four" className="menu-category">
              <h2 className="category-title">بيتيفور</h2>
              <p className="category-subtitle">Petit Four</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {petitFourItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="cake" className="menu-category">
              <h2 className="category-title">Cake</h2>
              <p className="category-subtitle">Cake</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cakeItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="croissant" className="menu-category">
              <h2 className="category-title">Croissant</h2>
              <p className="category-subtitle">Croissant</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {croissantItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="kaak" className="menu-category">
              <h2 className="category-title">كعك</h2>
              <p className="category-subtitle">Kaak</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kaakItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="donuts" className="menu-category">
              <h2 className="category-title">دوناتس</h2>
              <p className="category-subtitle">Donuts</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donutsItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="booza" className="menu-category">
              <h2 className="category-title">بوظة</h2>
              <p className="category-subtitle">Ice Cream</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boozaItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="salade" className="menu-category">
              <h2 className="category-title">Salade</h2>
              <p className="category-subtitle">Salade</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {saladeItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="pasta" className="menu-category">
              <h2 className="category-title">Pasta</h2>
              <p className="category-subtitle">Pasta</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastaItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="hot-sandwiches" className="menu-category">
              <h2 className="category-title">Hot Sandwiches</h2>
              <p className="category-subtitle">Hot Sandwiches</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotSandwichesItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="baguette-sandwiches" className="menu-category">
              <h2 className="category-title">Baguette Sandwiches</h2>
              <p className="category-subtitle">Baguette Sandwiches</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {baguetteSandwichesItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="starters" className="menu-category">
              <h2 className="category-title">Starters</h2>
              <p className="category-subtitle">Starters</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {startersItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="breakfast" className="menu-category">
              <h2 className="category-title">ترويقة L&apos;ETOILE</h2>
              <p className="category-subtitle">L&apos;ETOILE Breakfast</p>

              <div className="menu-items-table">
                <table>
                  <thead>
                    <tr>
                      <th className="item-name-col">Item</th>
                      <th className="item-price-col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {breakfastItems.map((item, index) => (
                      <tr key={index}>
                        <td className="item-name">
                          <span className="item-name-ar">{item.name}</span>
                          <span className="item-name-en">{item.nameEn}</span>
                        </td>
                        <td className="item-price">
                          {item.price ? (
                            <>
                              {item.price} <span className="currency">ل.ل.</span>
                            </>
                          ) : (
                            <span className="price-available">Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div>
            <h3>L&apos;étoile</h3>
            <p>Authentic Lebanese bakery crafting traditional delights since 1985.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} L&apos;étoile Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

