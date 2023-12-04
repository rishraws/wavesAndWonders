// const sampleListings = [
//   //   {
//   //     title: "Cozy Beachfront Cottage",
//   //     description:
//   //       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 1500,
//   //     location: "Malibu",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Modern Loft in Downtown",
//   //     description:
//   //       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//   //     image:
//   //       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 1200,
//   //     location: "New York City",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Mountain Retreat",
//   //     description:
//   //       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 1000,
//   //     location: "Aspen",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Historic Villa in Tuscany",
//   //     description:
//   //       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 2500,
//   //     location: "Florence",
//   //     country: "Italy",
//   //   },
//   //   {
//   //     title: "Secluded Treehouse Getaway",
//   //     description:
//   //       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 800,
//   //     location: "Portland",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Beachfront Paradise",
//   //     description:
//   //       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 2000,
//   //     location: "Cancun",
//   //     country: "Mexico",
//   //   },
//   //   {
//   //     title: "Rustic Cabin by the Lake",
//   //     description:
//   //       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 900,
//   //     location: "Lake Tahoe",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Luxury Penthouse with City Views",
//   //     description:
//   //       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 3500,
//   //     location: "Los Angeles",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Ski-In/Ski-Out Chalet",
//   //     description:
//   //       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 3000,
//   //     location: "Verbier",
//   //     country: "Switzerland",
//   //   },
//   //   {
//   //     title: "Safari Lodge in the Serengeti",
//   //     description:
//   //       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 4000,
//   //     location: "Serengeti National Park",
//   //     country: "Tanzania",
//   //   },
//   //   {
//   //     title: "Historic Canal House",
//   //     description:
//   //       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 1800,
//   //     location: "Amsterdam",
//   //     country: "Netherlands",
//   //   },
//   //   {
//   //     title: "Private Island Retreat",
//   //     description:
//   //       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 10000,
//   //     location: "Fiji",
//   //     country: "Fiji",
//   //   },
//   //   {
//   //     title: "Charming Cottage in the Cotswolds",
//   //     description:
//   //       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 1200,
//   //     location: "Cotswolds",
//   //     country: "United Kingdom",
//   //   },
//   //   {
//   //     title: "Historic Brownstone in Boston",
//   //     description:
//   //       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 2200,
//   //     location: "Boston",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Beachfront Bungalow in Bali",
//   //     description:
//   //       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 1800,
//   //     location: "Bali",
//   //     country: "Indonesia",
//   //   },
//   //   {
//   //     title: "Mountain View Cabin in Banff",
//   //     description:
//   //       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 1500,
//   //     location: "Banff",
//   //     country: "Canada",
//   //   },
//   //   {
//   //     title: "Art Deco Apartment in Miami",
//   //     description:
//   //       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//   //     image:
//   //       "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 1600,
//   //     location: "Miami",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Tropical Villa in Phuket",
//   //     description:
//   //       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 3000,
//   //     location: "Phuket",
//   //     country: "Thailand",
//   //   },
//   //   {
//   //     title: "Historic Castle in Scotland",
//   //     description:
//   //       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 4000,
//   //     location: "Scottish Highlands",
//   //     country: "United Kingdom",
//   //   },
//   //   {
//   //     title: "Desert Oasis in Dubai",
//   //     description:
//   //       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 5000,
//   //     location: "Dubai",
//   //     country: "United Arab Emirates",
//   //   },
//   //   {
//   //     title: "Rustic Log Cabin in Montana",
//   //     description:
//   //       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 1100,
//   //     location: "Montana",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Beachfront Villa in Greece",
//   //     description:
//   //       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 2500,
//   //     location: "Mykonos",
//   //     country: "Greece",
//   //   },
//   //   {
//   //     title: "Eco-Friendly Treehouse Retreat",
//   //     description:
//   //       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 750,
//   //     location: "Costa Rica",
//   //     country: "Costa Rica",
//   //   },
//   //   {
//   //     title: "Historic Cottage in Charleston",
//   //     description:
//   //       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 1600,
//   //     location: "Charleston",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Modern Apartment in Tokyo",
//   //     description:
//   //       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   //     price: 2000,
//   //     location: "Tokyo",
//   //     country: "Japan",
//   //   },
//   //   {
//   //     title: "Lakefront Cabin in New Hampshire",
//   //     description:
//   //       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 1200,
//   //     location: "New Hampshire",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Luxury Villa in the Maldives",
//   //     description:
//   //       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 6000,
//   //     location: "Maldives",
//   //     country: "Maldives",
//   //   },
//   //   {
//   //     title: "Ski Chalet in Aspen",
//   //     description:
//   //       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 4000,
//   //     location: "Aspen",
//   //     country: "United States",
//   //   },
//   //   {
//   //     title: "Secluded Beach House in Costa Rica",
//   //     description:
//   //       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//   //     image:
//   //       "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   //     price: 1800,
//   //     location: "Costa Rica",
//   //     country: "Costa Rica",
//   //   },
//   // ];

// {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

//   module.exports = { data: sampleListings };

const beachActivity = [
  {
    title: "Swimming",
    description:
      "Enjoy a refreshing swim in the crystal-clear waters of our beach.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://media.istockphoto.com/id/945738744/photo/kids-having-super-fun-splashing-and-jumping-in-the-sea-waves.webp?b=1&s=170667a&w=0&k=20&c=UuQfMaBzIprGRZ6CU5nWOlmTkmH1EB7ywfEh045tmUI=",
    },
    price: 0,
    location: "Beachfront",
    time: 0,
  },
  {
    title: "Surfing",
    description: "Ride the waves and catch the thrill of surfing.",
    ageCriteria: 12,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 50,
    location: "Surf Beach",
    time: 120,
  },
  {
    title: "Snorkeling",
    description: "Explore the underwater world with snorkeling adventures.",
    ageCriteria: 10,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8U25vcmtlbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 30,
    location: "Coral Cove",
    time: 90,
  },
  {
    title: "Scuba Diving",
    description: "Dive deep into the ocean and discover marine wonders.",
    ageCriteria: 18,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmElMjBkaXZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 150,
    location: "Deep Sea",
    time: 180,
  },
  {
    title: "Kayaking",
    description: "Paddle through calm waters and enjoy the scenic beauty.",
    ageCriteria: 8,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1554913968-6ba85b94df1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2F5YWtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 40,
    location: "Mangrove Bay",
    time: 60,
  },
  {
    title: "Paddleboarding",
    description:
      "Stand-up paddleboard on gentle waves for a relaxing experience.",
    ageCriteria: 14,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1598112747595-0ac8aa788d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBhZGRsZWJvYXJkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    price: 45,
    location: "Paddle Bay",
    time: 90,
  },
  {
    title: "Jet Skiing",
    description: "Speed across the water on a thrilling jet ski adventure.",
    ageCriteria: 16,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1650939489549-6024fc57c0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SmV0JTIwU2tpaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    price: 80,
    location: "WaveRunner Beach",
    time: 30,
  },
  {
    title: "Parasailing",
    description:
      "Soar above the ocean and enjoy breathtaking views from the sky.",
    ageCriteria: 10,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1632904074880-b77f02b6d01e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFyYXNhaWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 70,
    location: "Sky High Beach",
    time: 15,
  },
  {
    title: "Windsurfing",
    description: "Combine surfing and sailing for an exciting water sport.",
    ageCriteria: 12,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1561979608-360632b36831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2luZHN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 55,
    location: "Wind Beach",
    time: 60,
  },
  {
    title: "Beach Volleyball",
    description: "Gather your friends for a friendly game of beach volleyball.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1634501087922-c01c76ed66d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJlYWNoJTIwVm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 0,
    location: "Beachfront",
    time: 0,
  },
  {
    title: "Beach Yoga",
    description: "Find inner peace with yoga sessions on the sandy shores.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1561579890-3ace74d8e378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVhY2glMjBZb2dhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    price: 20,
    location: "Sunrise Beach",
    time: 60,
  },
  {
    title: "Beach Soccer",
    description: "Play soccer on the beach with your friends and family.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1609516903996-cf2ed8e5992a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmVhY2glMjBTb2NjZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 10,
    location: "Beachfront",
    time: 0,
  },
  {
    title: "Beach Picnicking",
    description: "Enjoy a delightful picnic with a view of the ocean waves.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://plus.unsplash.com/premium_photo-1663040458693-792a27068dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2glMjBQaWNuaWNraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    price: 15,
    location: "Picnic Cove",
    time: 120,
  },
  {
    title: "Sandcastle Building",
    description:
      "Get creative and build sandcastles on the beach with your family.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://media.istockphoto.com/id/840576218/photo/brother-and-sister-building-a-sandcastle-on-beach.jpg?s=612x612&w=0&k=20&c=C0N35f8Fx9RS4yVxtkX_1sl5oyGAuB6JkXfgCmzQ118=",
    },
    price: 0,
    location: "Sandy Shores",
    time: 90,
  },
  {
    title: "Beachcombing",
    description: "Search for seashells and treasures along the shoreline.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://media.istockphoto.com/id/1584162647/photo/scallops-in-hand.jpg?s=612x612&w=0&k=20&c=W9eqdlIP-dH1BizyQ_pk0IQAuGbISWJwL3a8y2jqKgo=",
    },
    price: 0,
    location: "Treasure Coast",
    time: 0,
  },
  {
    title: "Fishing (Shore)",
    description: "Cast your line and try your luck with shore fishing.",
    ageCriteria: 8,
    image: {
      filename: "activityimage",
      url: "https://media.istockphoto.com/id/1172612804/photo/children-and-father-fishing-on-coastal-rocks.webp?b=1&s=170667a&w=0&k=20&c=c0bNHyriQcrNEnQe9M5Tov1SsEnRH2AXOQNLjhBXUJk=",
    },
    price: 25,
    location: "Fishing Pier",
    time: 120,
  },

  {
    title: "Fishing (Deep-Sea)",
    description: "Embark on an offshore adventure for deep-sea fishing.",
    ageCriteria: 16,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 150,
    location: "Deep Sea",
    time: 240,
  },
  {
    title: "Beach Bonfires",
    description: "Gather around a beach bonfire for a cozy evening by the sea.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 30,
    location: "Bonfire Beach",
    time: 120,
  },
  {
    title: "Sunset Cruises",
    description: "Experience breathtaking sunsets on a relaxing cruise.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 75,
    location: "Harbor Cruise",
    time: 90,
  },
  {
    title: "Dolphin Watching Tours",
    description: "Spot playful dolphins on a guided tour in the open sea.",
    ageCriteria: 6,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 60,
    location: "Dolphin Bay",
    time: 120,
  },
  {
    title: "Whale Watching Tours",
    description: "Observe majestic whales during their migration season.",
    ageCriteria: 6,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 80,
    location: "Whale Watch Point",
    time: 180,
  },
  {
    title: "Boat Rentals",
    description: "Rent a boat and explore the coastline at your own pace.",
    ageCriteria: 18,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 100,
    location: "Marina Cove",
    time: 240,
  },
  {
    title: "Sailing",
    description: "Set sail on a beautiful yacht and enjoy the ocean breeze.",
    ageCriteria: 14,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 120,
    location: "Sailor's Bay",
    time: 180,
  },
  {
    title: "Glass-Bottom Boat Tours",
    description: "Discover underwater wonders through a glass-bottom boat.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 45,
    location: "Glass Bay",
    time: 60,
  },
  {
    title: "Beach Horseback Riding",
    description:
      "Ride horses along the shoreline for a unique beach experience.",
    ageCriteria: 12,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 65,
    location: "Horse Beach",
    time: 90,
  },
  {
    title: "Snack Bars and Beachside Dining",
    description: "Indulge in delicious snacks and meals with an ocean view.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 20,
    location: "Beachfront",
    time: 0,
  },
  {
    title: "Beachside Massage Services",
    description: "Relax with soothing massages by the beach.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 60,
    location: "Massage Cove",
    time: 60,
  },
  {
    title: "Beachfront Yoga Classes",
    description: "Find peace and balance with yoga sessions on the beach.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 30,
    location: "Yoga Beach",
    time: 60,
  },
  {
    title: "Beach Cleanup Events",
    description:
      "Join eco-friendly beach cleanup events and help protect the environment.",
    ageCriteria: 0,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 0,
    location: "Eco Beach",
    time: 120,
  },
  {
    title: "Stand-Up Comedy Nights",
    description: "Enjoy laughter-filled nights with beach-themed comedy shows.",
    ageCriteria: 18,
    image: {
      filename: "activityimage",
      url: "https://images.unsplash.com/photo-1551524358-f34c0214781d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cmZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    price: 25,
    location: "Comedy Beach",
    time: 120,
  },
];

module.exports = { data: beachActivity };

// Add more activities following a similar structure
//https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVhY2glMjBQaWNuaWNraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60
//Waves and Wonders
//https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60
