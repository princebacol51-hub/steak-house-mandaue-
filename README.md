<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steak House Unli Rice | Mandaue City, Cebu</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        heading: ['Oswald', 'sans-serif'],
                        body: ['Poppins', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            orange: '#ea580c', // orange-600
                            dark: '#1c1917',   // stone-900
                            darker: '#0c0a09', // stone-950
                            light: '#f5f5f4',  // stone-100
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom styles for background overlay */
        .hero-bg {
            background-image: linear-gradient(to bottom, rgba(12, 10, 9, 0.7), rgba(12, 10, 9, 0.9)), url('https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=2000');
            background-size: cover;
            background-position: center;
        }
        .promo-bg {
            background-image: linear-gradient(to right, rgba(234, 88, 12, 0.9), rgba(153, 27, 27, 0.9)), url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        body {
            font-family: 'Poppins', sans-serif;
        }
        h1, h2, h3, h4, h5, h6, .font-heading {
            font-family: 'Oswald', sans-serif;
        }
    </style>
</head>
<body class="bg-brand-darker text-brand-light antialiased">

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-brand-darker/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <i data-lucide="flame" class="w-8 h-8 text-brand-orange"></i>
                    <div class="flex flex-col">
                        <span class="font-heading font-bold text-2xl tracking-wide leading-none text-white">STEAK HOUSE</span>
                        <span class="text-brand-orange text-xs font-bold tracking-widest uppercase">Unli Rice &bull; Mandaue</span>
                    </div>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#home" class="text-stone-300 hover:text-brand-orange transition-colors font-medium text-sm uppercase tracking-wider">Home</a>
                    <a href="#menu" class="text-stone-300 hover:text-brand-orange transition-colors font-medium text-sm uppercase tracking-wider">Menu</a>
                    <a href="#promos" class="text-stone-300 hover:text-brand-orange transition-colors font-medium text-sm uppercase tracking-wider">Promos</a>
                    <a href="#reviews" class="text-stone-300 hover:text-brand-orange transition-colors font-medium text-sm uppercase tracking-wider">Reviews</a>
                    <a href="#location" class="text-stone-300 hover:text-brand-orange transition-colors font-medium text-sm uppercase tracking-wider">Location</a>
                    <a href="#reserve" class="px-6 py-2.5 rounded bg-brand-orange text-white hover:bg-orange-500 transition-colors font-heading font-medium tracking-wide">
                        Book a Table
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-stone-300 hover:text-white focus:outline-none">
                        <i data-lucide="menu" class="w-7 h-7"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Panel -->
        <div id="mobile-menu" class="md:hidden hidden bg-brand-dark border-t border-white/10 absolute w-full shadow-2xl">
            <div class="px-4 pt-2 pb-6 space-y-1 flex flex-col gap-1">
                <a href="#home" class="block px-3 py-3 text-base font-medium text-stone-300 hover:text-brand-orange hover:bg-white/5 rounded">Home</a>
                <a href="#menu" class="block px-3 py-3 text-base font-medium text-stone-300 hover:text-brand-orange hover:bg-white/5 rounded">Menu</a>
                <a href="#promos" class="block px-3 py-3 text-base font-medium text-stone-300 hover:text-brand-orange hover:bg-white/5 rounded">Promos</a>
                <a href="#reviews" class="block px-3 py-3 text-base font-medium text-stone-300 hover:text-brand-orange hover:bg-white/5 rounded">Reviews</a>
                <a href="#location" class="block px-3 py-3 text-base font-medium text-stone-300 hover:text-brand-orange hover:bg-white/5 rounded">Location</a>
                <a href="#reserve" class="block px-3 py-3 text-base font-medium text-white bg-brand-orange text-center rounded mt-2">Book a Table / Order</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative hero-bg pt-32 pb-20 lg:pt-48 lg:pb-40 flex items-center min-h-[90vh]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-orange/50 bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-6 uppercase tracking-wider">
                    <i data-lucide="map-pin" class="w-4 h-4"></i>
                    Now Sizzling in Mandaue City
                </div>
                
                <h1 class="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none text-white uppercase">
                    Sizzling Steak. <br />
                    <span class="text-brand-orange">Unlimited Rice.</span>
                </h1>
                
                <p class="mt-4 text-lg md:text-xl text-stone-300 mb-10 max-w-xl font-light">
                    Satisfy your cravings with Cebu's most mouth-watering, budget-friendly steaks served on a hot sizzling plate. Busog lusog guaranteed with our unli rice!
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#menu" class="px-8 py-4 rounded bg-brand-orange text-white font-heading font-medium text-lg tracking-wider hover:bg-orange-500 transition-all text-center">
                        View Menu
                    </a>
                    <a href="#reserve" class="px-8 py-4 rounded bg-transparent text-white border border-white/30 font-heading font-medium text-lg tracking-wider hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2">
                        Reserve a Table <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section (Best Sellers) -->
    <section id="menu" class="py-24 bg-brand-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-brand-orange font-heading tracking-widest text-lg uppercase mb-2">Our Best Sellers</h2>
                <h3 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Crowd Favorites</h3>
                <div class="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Item 1 -->
                <div class="bg-brand-darker rounded-xl overflow-hidden shadow-xl border border-white/5 group relative">
                    <div class="absolute top-4 right-4 z-10 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg animate-pulse">
                        Best Seller
                    </div>
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=600" alt="T-Bone Steak" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute bottom-0 w-full bg-gradient-to-t from-brand-darker to-transparent h-24"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-heading text-2xl font-bold text-white">Classic T-Bone</h4>
                            <span class="font-heading text-xl text-brand-orange font-bold">₱199</span>
                        </div>
                        <p class="text-stone-400 text-sm mb-4">Tender, juicy T-bone steak served on a hot plate with our signature gravy, buttered mixed veggies, and unlimited rice.</p>
                        <div class="inline-flex items-center gap-1 text-xs font-semibold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                            <i data-lucide="bowl" class="w-3 h-3"></i> Includes Unli Rice
                        </div>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="bg-brand-darker rounded-xl overflow-hidden shadow-xl border border-white/5 group relative">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=600" alt="Ribeye Steak" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute bottom-0 w-full bg-gradient-to-t from-brand-darker to-transparent h-24"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-heading text-2xl font-bold text-white">Sizzling Ribeye</h4>
                            <span class="font-heading text-xl text-brand-orange font-bold">₱249</span>
                        </div>
                        <p class="text-stone-400 text-sm mb-4">Premium cut ribeye, perfectly marbled and seared to your liking. Served with savory mushroom gravy and unlimited rice.</p>
                        <div class="inline-flex items-center gap-1 text-xs font-semibold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                            <i data-lucide="bowl" class="w-3 h-3"></i> Includes Unli Rice
                        </div>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="bg-brand-darker rounded-xl overflow-hidden shadow-xl border border-white/5 group relative">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=600" alt="Pork Chop Steak" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute bottom-0 w-full bg-gradient-to-t from-brand-darker to-transparent h-24"></div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-heading text-2xl font-bold text-white">Pork Chop Steak</h4>
                            <span class="font-heading text-xl text-brand-orange font-bold">₱149</span>
                        </div>
                        <p class="text-stone-400 text-sm mb-4">Thick-cut, marinated pork chop grilled to perfection. A budget-friendly favorite served with garlic bits and unlimited rice.</p>
                        <div class="inline-flex items-center gap-1 text-xs font-semibold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                            <i data-lucide="bowl" class="w-3 h-3"></i> Includes Unli Rice
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <a href="#reserve" class="inline-flex items-center gap-2 text-brand-orange hover:text-white transition-colors font-medium border-b border-brand-orange hover:border-white pb-1">
                    <i data-lucide="download" class="w-4 h-4"></i> Download Full Menu PDF
                </a>
            </div>
        </div>
    </section>

    <!-- Promos Section -->
    <section id="promos" class="py-20 promo-bg relative">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span class="px-3 py-1 rounded bg-white text-brand-orange text-sm font-bold uppercase tracking-wider mb-4 inline-block">Limited Time Offers</span>
                    <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-4 uppercase">Barkada Feast Promo!</h2>
                    <p class="text-xl text-stone-200 mb-8">Bring your friends and get more value. Buy any 4 Best-Selling Steaks and get 1 FREE pitcher of our Signature Iced Tea plus a basket of French Fries!</p>
                    
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center gap-3 text-white">
                            <i data-lucide="check-circle-2" class="text-green-400 w-6 h-6"></i>
                            <span>Valid for Dine-in only in our Mandaue Branch</span>
                        </li>
                        <li class="flex items-center gap-3 text-white">
                            <i data-lucide="check-circle-2" class="text-green-400 w-6 h-6"></i>
                            <span>Available every Mon-Thu, 11:00 AM - 4:00 PM</span>
                        </li>
                    </ul>
                    
                    <a href="#reserve" class="px-8 py-4 rounded bg-white text-brand-orange font-heading font-medium text-lg tracking-wider hover:bg-stone-200 transition-all inline-block">
                        Claim Promo & Book
                    </a>
                </div>
                
                <div class="bg-brand-darker/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
                    <i data-lucide="graduation-cap" class="w-16 h-16 text-brand-orange mx-auto mb-4"></i>
                    <h3 class="font-heading text-3xl font-bold text-white mb-2 uppercase">Student Discount</h3>
                    <p class="text-stone-300 mb-6">Show your valid Student ID to our staff and instantly get <span class="text-brand-orange font-bold text-xl">10% OFF</span> your total bill!</p>
                    <div class="border-t border-white/10 pt-4 text-sm text-stone-400">
                        *Cannot be combined with other promos.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Customer Reviews -->
    <section id="reviews" class="py-24 bg-brand-darker">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-brand-orange font-heading tracking-widest text-lg uppercase mb-2">Testimonials</h2>
                <h3 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6 uppercase">What Cebuanos Say</h3>
                <div class="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Review 1 -->
                <div class="bg-brand-dark p-8 rounded-xl border border-white/5">
                    <div class="flex gap-1 text-brand-orange mb-4">
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                    </div>
                    <p class="text-stone-300 italic mb-6">"Lami kaayo! The gravy is so good and the meat is tender. Plus, you really can't beat unlimited rice for ₱199. Definitely my go-to spot after work in Mandaue."</p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center font-bold text-white">JP</div>
                        <div>
                            <h5 class="text-white font-semibold text-sm">John Paul M.</h5>
                            <span class="text-xs text-stone-500">Local Guide</span>
                        </div>
                    </div>
                </div>

                <!-- Review 2 -->
                <div class="bg-brand-dark p-8 rounded-xl border border-white/5">
                    <div class="flex gap-1 text-brand-orange mb-4">
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                    </div>
                    <p class="text-stone-300 italic mb-6">"The Ribeye is a must-try. Ambiance is chill, not too crowded if you go early. The unli rice staff is very attentive, you don't even have to call them, they just approach you!"</p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center font-bold text-white">ML</div>
                        <div>
                            <h5 class="text-white font-semibold text-sm">Maria L.</h5>
                            <span class="text-xs text-stone-500">Food Blogger</span>
                        </div>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="bg-brand-dark p-8 rounded-xl border border-white/5">
                    <div class="flex gap-1 text-brand-orange mb-4">
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                        <i data-lucide="star" class="w-5 h-5 text-stone-600"></i>
                    </div>
                    <p class="text-stone-300 italic mb-6">"Sulit kaayo ang Barkada promo namo yesterday. Good food, cold iced tea, fast service. Parking is a bit limited but the guard is very helpful. Will come back."</p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center font-bold text-white">KT</div>
                        <div>
                            <h5 class="text-white font-semibold text-sm">Kevin T.</h5>
                            <span class="text-xs text-stone-500">Student</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Reservation / Contact / Location Section -->
    <section id="location" class="py-24 bg-brand-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                <!-- Info & Map -->
                <div>
                    <h2 class="text-brand-orange font-heading tracking-widest text-lg uppercase mb-2">Visit Us</h2>
                    <h3 class="font-heading text-4xl font-bold text-white mb-8 uppercase">Location & Hours</h3>
                    
                    <div class="space-y-6 mb-10">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded bg-brand-darker flex items-center justify-center text-brand-orange flex-shrink-0">
                                <i data-lucide="map-pin"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold mb-1">Mandaue City Branch</h4>
                                <p class="text-stone-400">A.S. Fortuna St., Brgy. Bakilid<br>Mandaue City, Cebu 6014</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded bg-brand-darker flex items-center justify-center text-brand-orange flex-shrink-0">
                                <i data-lucide="clock"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold mb-1">Opening Hours</h4>
                                <p class="text-stone-400">Monday - Sunday<br>11:00 AM - 10:00 PM</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded bg-brand-darker flex items-center justify-center text-brand-orange flex-shrink-0">
                                <i data-lucide="phone"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold mb-1">Contact Details</h4>
                                <p class="text-stone-400">0917-123-4567 (Globe)<br>(032) 234-5678 (Landline)</p>
                            </div>
                        </div>
                    </div>

                    <!-- Placeholder for Map -->
                    <div class="w-full h-64 bg-stone-800 rounded-xl overflow-hidden relative flex items-center justify-center border border-white/10 group cursor-pointer">
                        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                        <div class="relative z-10 text-center">
                            <i data-lucide="map" class="w-8 h-8 text-brand-orange mx-auto mb-2"></i>
                            <span class="text-white font-medium uppercase tracking-wider text-sm">Open in Google Maps</span>
                        </div>
                    </div>
                </div>

                <!-- Reservation Form -->
                <div id="reserve" class="bg-brand-darker p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative">
                    <h3 class="font-heading text-3xl font-bold text-white mb-2 uppercase">Book a Table / Order</h3>
                    <p class="text-stone-400 text-sm mb-8">Fill out the form below for reservations or advance pickup orders. We will text you to confirm.</p>
                    
                    <!-- Success Message Box (Hidden by default) -->
                    <div id="form-success" class="hidden bg-green-500/10 border border-green-500 text-green-400 px-4 py-4 rounded mb-6 flex items-start gap-3">
                        <i data-lucide="check-circle" class="w-6 h-6 flex-shrink-0"></i>
                        <div>
                            <h4 class="font-bold">Request Sent Successfully!</h4>
                            <p class="text-sm">Thank you. Our team will contact you shortly to confirm your reservation/order.</p>
                        </div>
                    </div>

                    <form id="booking-form" class="space-y-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-stone-400 text-sm font-medium mb-2">Full Name</label>
                                <input type="text" required class="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="Juan Dela Cruz">
                            </div>
                            <div>
                                <label class="block text-stone-400 text-sm font-medium mb-2">Phone Number</label>
                                <input type="tel" required class="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="09XX-XXX-XXXX">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-stone-400 text-sm font-medium mb-2">Date</label>
                                <input type="date" required class="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors">
                            </div>
                            <div>
                                <label class="block text-stone-400 text-sm font-medium mb-2">Time</label>
                                <input type="time" required class="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-stone-400 text-sm font-medium mb-2">Number of Persons</label>
                                <select class="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors">
                                    <option>1-2 Pax</option>
                                    <option>3-4 Pax</option>
                                    <option>5-6 Pax</option>
                                    <option>7+ Pax (Barkada)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-stone-400 text-sm font-medium mb-2">Request Type</label>
                                <select class="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors">
                                    <option>Dine-in Reservation</option>
                                    <option>Advance Pickup Order</option>
                                    <option>Event / Catering Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-stone-400 text-sm font-medium mb-2">Special Requests (Optional)</label>
                            <textarea rows="3" class="w-full bg-brand-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="e.g. Birthday setup, specific steak doneness..."></textarea>
                        </div>

                        <button type="submit" class="w-full bg-brand-orange text-white font-heading font-bold text-lg tracking-wider py-4 rounded hover:bg-orange-500 transition-colors uppercase mt-4">
                            Confirm Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-darker pt-16 pb-8 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div class="flex items-center gap-2">
                    <i data-lucide="flame" class="w-6 h-6 text-brand-orange"></i>
                    <span class="font-heading font-bold text-xl tracking-wide text-white">STEAK HOUSE <span class="text-brand-orange">UNLI RICE</span></span>
                </div>
                
                <div class="flex gap-4">
                    <a href="#" class="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-stone-400 hover:text-white hover:bg-brand-orange transition-all">
                        <i data-lucide="facebook" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-stone-400 hover:text-white hover:bg-brand-orange transition-all">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-stone-400 hover:text-white hover:bg-brand-orange transition-all">
                        <i data-lucide="twitter" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
                <p>&copy; 2026 Steak House Unli Rice Mandaue. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-brand-orange transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-brand-orange transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = mobileMenuBtn.querySelector('i');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle between menu and x icon
            if(mobileMenu.classList.contains('hidden')) {
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                menuIcon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });

        // Form Submission Logic
        const bookingForm = document.getElementById('booking-form');
        const formSuccess = document.getElementById('form-success');

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Hide form and show success message
            bookingForm.reset();
            formSuccess.classList.remove('hidden');
            
            // Optional: Hide success message after a few seconds
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 6000);
        });
    </script>
</body>
</html>
