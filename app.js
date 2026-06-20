// ════════════════════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════════════════════
const LISTINGS = [
  {id:1,icon:"🏢",type:"2 Bedrooms",name:"Modern 2BR Apartment",area:"Kilimani",county:"Nairobi",price:35000,beds:2,baths:2,size:"85 sqm",floor:"4th floor",deposit:"1 month's rent",desc:"Spacious, light-filled 2-bedroom apartment in the heart of Kilimani. Walking distance to Junction Mall, Nairobi Hospital, and top schools. Includes 24hr water, allocated parking, and reliable fibre connectivity.",amenities:["Parking","24hr Water","Ensuite","Fibre-ready","Security","CCTV","Pre-paid meter"],locked:true,badge:"Available",views:142,unlocks:8,phone:"+254 712 345 678",whatsapp:"+254 712 345 678",fullAddress:"Apt 4C, Acacia Court, Lenana Road, Kilimani",contact:"Margaret Njeri (Landlord)"},
  {id:2,icon:"🏠",type:"Bedsitter",name:"Cosy Bedsitter",area:"South B",county:"Nairobi",price:8500,beds:0,baths:1,size:"22 sqm",floor:"Ground floor",deposit:"1 month's rent",desc:"Clean, well-maintained bedsitter in a quiet South B compound. Near Mombasa Road bus stops and South B Shopping Centre. Security guard on-site 24/7.",amenities:["24hr Water","Security","Pre-paid meter"],locked:true,badge:"Available",views:64,unlocks:3,phone:"+254 722 987 654",whatsapp:"+254 722 987 654",fullAddress:"Room 8, Nairobi Courts, Lunga Lunga Road, South B",contact:"Hassan Abdi (Caretaker)"},
  {id:3,icon:"🏘️",type:"1 Bedroom",name:"1BR Apartment with Balcony",area:"Ruaka",county:"Kiambu",price:18000,beds:1,baths:1,size:"48 sqm",floor:"2nd floor",deposit:"2 months' rent",desc:"Beautiful 1-bedroom apartment in fast-growing Ruaka. Great balcony view over the valley. 10 minutes to Two Rivers Mall and 15 minutes to Westlands. Fibre internet from Safaricom available.",amenities:["Balcony","Parking","Fibre-ready","Security","24hr Water","Pre-paid meter"],locked:true,badge:"Available",views:98,unlocks:5,phone:"+254 733 111 222",whatsapp:"+254 733 111 222",fullAddress:"Apt 2A, Riverside Apartments, Ruaka Town, off Limuru Road",contact:"Peter Mwangi (Property Manager)"},
  {id:4,icon:"🏬",type:"3 Bedrooms",name:"3BR Maisonette with DSQ",area:"Karen",county:"Nairobi",price:95000,beds:3,baths:3,size:"180 sqm",floor:"Ground + 1st",deposit:"2 months' rent",desc:"Stunning 3-bedroom maisonette in leafy Karen. Comes with a fully separate DSQ, private garden, and 2-car parking bay. Ideal for families. Near Karen Shopping Centre and international schools.",amenities:["DSQ","Garden","Parking","24hr Water","Security","Generator","Borehole","CCTV"],locked:true,badge:"Available",views:210,unlocks:14,phone:"+254 700 444 555",whatsapp:"+254 700 444 555",fullAddress:"No. 12, Bogani East Road, Karen — near Karen Country Club",contact:"Diana Waweru (Landlord)"},
  {id:5,icon:"🏙️",type:"Studio",name:"Studio Apartment",area:"Westlands",county:"Nairobi",price:28000,beds:0,baths:1,size:"35 sqm",floor:"7th floor",deposit:"1 month's rent",desc:"Compact and stylish studio apartment on the 7th floor with city views. Walking distance to Sarit Centre, major banks, and corporate offices. Gym and elevator in the building. Perfect for young professionals.",amenities:["Furnished","Fibre-ready","Gym","Security","Elevator","CCTV"],locked:false,badge:"Available",views:187,unlocks:11,phone:"+254 700 234 567",whatsapp:"+254 700 234 567",fullAddress:"Apt 7E, Westview Towers, Westlands Road — opposite Sarit Centre",contact:"James Kariuki (Landlord)"},
  {id:6,icon:"🏡",type:"1 Bedroom",name:"1BR Garden Apartment",area:"Langata",county:"Nairobi",price:16500,beds:1,baths:1,size:"52 sqm",floor:"Ground floor",deposit:"1 month's rent",desc:"Peaceful ground-floor 1-bedroom with direct access to a shared garden. Near Wilson Airport and Langata Road. Quick matatu access to CBD. Includes allocated parking space.",amenities:["Garden","Parking","24hr Water","Security","Pre-paid meter"],locked:true,badge:"Available",views:55,unlocks:2,phone:"+254 711 888 999",whatsapp:"+254 711 888 999",fullAddress:"Apt 3, Green Gardens, Langata South Road — near Hardy",contact:"Samuel Otieno (Landlord)"},
  {id:7,icon:"🏗️",type:"2 Bedrooms",name:"2BR in New Development",area:"Roysambu",county:"Nairobi",price:20000,beds:2,baths:2,size:"72 sqm",floor:"3rd floor",deposit:"1 month's rent",desc:"Brand new 2-bedroom apartment in Roysambu. Modern finishes throughout. 24hr borehole water, backup generator, and allocated parking. Near Thika Road Mall and Roysambu matatu terminus.",amenities:["24hr Water","Parking","Security","Generator","Borehole","Pre-paid meter"],locked:true,badge:"Available",views:78,unlocks:4,phone:"+254 723 555 666",whatsapp:"+254 723 555 666",fullAddress:"Block C Apt 12, Roysambu Crescent, Thika Road — opposite TRM",contact:"Agnes Kamau (Letting Agent)"},
  {id:8,icon:"🏢",type:"Bedsitter",name:"Bedsitter Near CBD",area:"Eastleigh",county:"Nairobi",price:6500,beds:0,baths:1,size:"18 sqm",floor:"1st floor",deposit:"1 month's rent",desc:"Affordable and clean bedsitter in Eastleigh. 10-minute matatu ride to Nairobi CBD. Very busy area with markets, shops, and restaurants. Quiet compound with perimeter wall and security.",amenities:["24hr Water","Security"],locked:true,badge:"Available",views:41,unlocks:2,phone:"+254 700 777 888",whatsapp:"+254 700 777 888",fullAddress:"Room 14, Eastleigh Flats, 1st Avenue, Eastleigh — near Garage Road",contact:"Omar Hassan (Landlord)"},
  {id:9,icon:"🌿",type:"4 Bedrooms",name:"4BR Family Home",area:"Runda",county:"Nairobi",price:180000,beds:4,baths:4,size:"320 sqm",floor:"Ground + 1st",deposit:"3 months' rent",desc:"Luxurious 4-bedroom family home in the prestigious Runda estate. Private gated compound, swimming pool, large garden, staff quarters, and double garage. Ideal for expat families and senior executives. Near Gigiri diplomatic zone.",amenities:["Swimming Pool","Garden","DSQ","Parking","Security","Generator","Furnished","CCTV","Borehole"],locked:true,badge:"Available",views:89,unlocks:7,phone:"+254 733 000 111",whatsapp:"+254 733 000 111",fullAddress:"No. 8, Runda Close, off Runda Drive — near UN offices, Gigiri",contact:"Global Properties Ltd (Letting Agent)"},
  {id:10,icon:"🏛️",type:"2 Bedrooms",name:"2BR Furnished Apartment",area:"Kileleshwa",county:"Nairobi",price:45000,beds:2,baths:2,size:"92 sqm",floor:"5th floor",deposit:"2 months' rent",desc:"Tastefully furnished 2-bedroom apartment in upmarket Kileleshwa. Move-in ready. High-speed internet, DSTV connection, and stunning views of the Nairobi skyline. Walking distance to Valley Arcade.",amenities:["Furnished","Parking","24hr Water","Security","Elevator","Fibre-ready","CCTV","Generator"],locked:true,badge:"Available",views:165,unlocks:9,phone:"+254 700 321 654",whatsapp:"+254 700 321 654",fullAddress:"Apt 5B, Kileleshwa Heights, Kileleshwa Road — off Peponi Road",contact:"Wambui Njoroge (Property Manager)"},
  {id:11,icon:"🏠",type:"Single Room",name:"Single Room — En Suite",area:"South C",county:"Nairobi",price:7000,beds:0,baths:1,size:"16 sqm",floor:"2nd floor",deposit:"1 month's rent",desc:"Neat self-contained single room with private en-suite bathroom. Located in South C, near Nyayo Stadium and easy Mombasa Road access. Borehole water and pre-paid electricity.",amenities:["Ensuite","24hr Water","Borehole","Security","Pre-paid meter"],locked:true,badge:"Available",views:33,unlocks:1,phone:"+254 711 234 567",whatsapp:"",fullAddress:"Room 6, Kairu Flats, Muhoho Avenue, South C",contact:"John Mwangi (Landlord)"},
  {id:12,icon:"🏘️",type:"3 Bedrooms",name:"3BR Apartment — Lavington",area:"Lavington",county:"Nairobi",price:75000,beds:3,baths:3,size:"140 sqm",floor:"2nd floor",deposit:"2 months' rent",desc:"Spacious 3-bedroom apartment in Lavington. Quiet, tree-lined road. Great for families wanting a premium neighbourhood. Near Lavington Green Mall and international schools.",amenities:["Parking","24hr Water","Security","Garden","Generator","Fibre-ready","CCTV","Ensuite"],locked:true,badge:"Available",views:112,unlocks:6,phone:"+254 722 456 789",whatsapp:"+254 722 456 789",fullAddress:"Apt 2C, Lavington Court, James Gichuru Road — near Total petrol station",contact:"Lavington Properties (Letting Agent)"},
];

const ESTATES = [
  {icon:"🏙️",name:"Kilimani",count:320,range:"KES 25k–80k"},
  {icon:"🌿",name:"Karen",count:180,range:"KES 45k–200k"},
  {icon:"🏘️",name:"South B",count:540,range:"KES 8k–28k"},
  {icon:"🏢",name:"Westlands",count:290,range:"KES 30k–100k"},
  {icon:"🏗️",name:"Ruaka",count:410,range:"KES 12k–35k"},
  {icon:"🌆",name:"Roysambu",count:360,range:"KES 8k–22k"},
  {icon:"🏡",name:"Langata",count:220,range:"KES 15k–55k"},
  {icon:"🏬",name:"Eastleigh",count:480,range:"KES 6k–20k"},
];

const TENANTS = [
  {initials:"GW",color:"#1D4ED8",bg:"#DBEAFE",name:"Grace Wanjiku",unit:"Unit 3A, Kileleshwa",phone:"+254 712 111 222",since:"Jan 2025",rent:35000,status:"paid",lease:"31 Dec 2025"},
  {initials:"BO",color:"#16A34A",bg:"#DCFCE7",name:"Brian Omondi",unit:"Unit 1B, South B",phone:"+254 722 333 444",since:"Mar 2024",rent:12000,status:"paid",lease:"28 Feb 2026"},
  {initials:"AM",color:"#B45309",bg:"#FEF3C7",name:"Aisha Mohamed",unit:"Unit 5, Ruaka",phone:"+254 733 555 666",since:"Jun 2025",rent:18500,status:"due",lease:"31 May 2026"},
  {initials:"PN",color:"#6D28D9",bg:"#EDE9FE",name:"Peter Njoroge",unit:"Unit 2C, Kileleshwa",phone:"+254 700 777 888",since:"Aug 2023",rent:35000,status:"paid",lease:"31 Jul 2026"},
  {initials:"MA",color:"#DC2626",bg:"#FEE2E2",name:"Mary Atieno",unit:"Unit 4, South B",phone:"+254 711 999 000",since:"Nov 2024",rent:10000,status:"overdue",lease:"31 Oct 2025"},
  {initials:"JK",color:"#0369A1",bg:"#E0F2FE",name:"James Kamau",unit:"Unit 7, Karen",phone:"+254 723 112 334",since:"Feb 2025",rent:95000,status:"paid",lease:"31 Jan 2026"},
  {initials:"SW",color:"#D97706",bg:"#FEF3C7",name:"Salome Wanjiru",unit:"Unit 9, Westlands",phone:"+254 700 445 667",since:"Apr 2024",rent:28000,status:"paid",lease:"30 Apr 2026"},
  {initials:"DM",color:"#4F1D96",bg:"#F3F0FF",name:"David Mutua",unit:"Unit 11, Runda",phone:"+254 733 889 000",since:"Sep 2024",rent:180000,status:"paid",lease:"31 Aug 2026"},
];

const MAINTENANCE = [
  {id:"MR-001",title:"Kitchen tap leaking",unit:"Unit 3A, Kileleshwa",tenant:"Grace Wanjiku",priority:"high",status:"open",date:"12 Jun 2026",desc:"Kitchen tap has been dripping for 3 days. Water pressure seems OK but tap won't close fully."},
  {id:"MR-002",title:"Bathroom tiles cracked",unit:"Unit 5, Ruaka",tenant:"Aisha Mohamed",priority:"medium",status:"in-progress",date:"10 Jun 2026",desc:"Two tiles near the shower have cracked. Not urgent but needs repair before it spreads."},
  {id:"MR-003",title:"Electrical socket not working",unit:"Unit 1B, South B",tenant:"Brian Omondi",priority:"high",status:"open",date:"14 Jun 2026",desc:"The socket next to the kitchen is dead. Fuse appears fine. Possible wiring issue."},
  {id:"MR-004",title:"Broken window latch",unit:"Unit 2C, Kileleshwa",tenant:"Peter Njoroge",priority:"low",status:"resolved",date:"5 Jun 2026",desc:"Bedroom window latch replaced. Work completed 7 Jun. Tenant confirmed satisfied."},
  {id:"MR-005",title:"Water heater not working",unit:"Unit 4, South B",tenant:"Mary Atieno",priority:"high",status:"in-progress",date:"13 Jun 2026",desc:"Electric water heater has stopped working entirely. Tenant has no hot water. Urgent."},
];

const PAYMENTS_LOG = [
  {date:"16 Jun 2026, 09:14",from:"Grace Wanjiku (+254 712 111 222)",amount:"KES 35,000",ref:"OB1234XY",property:"Unit 3A, Kileleshwa",status:"Confirmed"},
  {date:"15 Jun 2026, 17:32",from:"Peter Njoroge (+254 700 777 888)",amount:"KES 35,000",ref:"OB9876ZA",property:"Unit 2C, Kileleshwa",status:"Confirmed"},
  {date:"14 Jun 2026, 11:05",from:"James Kamau (+254 723 112 334)",amount:"KES 95,000",ref:"OB5544BB",property:"Unit 7, Karen",status:"Confirmed"},
  {date:"13 Jun 2026, 08:45",from:"Salome Wanjiru (+254 700 445 667)",amount:"KES 28,000",ref:"OB3322CC",property:"Unit 9, Westlands",status:"Confirmed"},
  {date:"12 Jun 2026, 14:22",from:"Brian Omondi (+254 722 333 444)",amount:"KES 12,000",ref:"OB1100DD",property:"Unit 1B, South B",status:"Confirmed"},
  {date:"10 Jun 2026, 09:00",from:"David Mutua (+254 733 889 000)",amount:"KES 180,000",ref:"OB7788EE",property:"Unit 11, Runda",status:"Confirmed"},
];

const FAQS = [
  {q:"How does the KES 1,000 unlock work?",a:"When you find a listing you like, click 'Unlock for KES 1,000'. Enter your M-Pesa number and an STK Push is sent to your phone. Enter your PIN to confirm. The owner's contacts appear instantly."},
  {q:"Is KES 1,000 per property or for all listings?",a:"It's KES 1,000 per individual property. Once unlocked, you can access that listing's contacts anytime — no expiry."},
  {q:"Can I get a refund?",a:"If contacts turn out to be invalid or the property is no longer available and you report it within 24 hours, we will issue a full refund."},
  {q:"How long does it take for my listing to go live?",a:"Our team reviews every listing before publishing. Standard listings are live within 2 hours. Premium listings are fast-tracked within 30 minutes."},
  {q:"How do tenants pay rent via M-Pesa?",a:"Tenants pay to your registered Paybill (522100) or directly to your M-Pesa number using your unit number as the account reference. You receive an instant SMS for each payment."},
  {q:"What if a tenant doesn't pay rent?",a:"Use the 'Send Reminder' button to send an automated SMS reminder. You can also contact the tenant directly from your Tenants dashboard."},
];

const REVENUE = [65,72,80,68,88,82,95,90,95,100,100,124];
const REVENUE_LABELS = ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];

// ════════════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════════════
let unlockedListings = new Set([5]);
let savedListings = new Set();
let currentListing = null;
let currentPage = 'home';
let shownCount = 9;
let filteredData = [];
let activeChipFilter = '';
let activeAmenityFilter = '';
let currentMaintFilter = '';

// Restore from localStorage
(function() {
  try {
    const ul = localStorage.getItem('nh_unlocked');
    if (ul) JSON.parse(ul).forEach(id => unlockedListings.add(id));
    const sl = localStorage.getItem('nh_saved');
    if (sl) JSON.parse(sl).forEach(id => savedListings.add(id));
  } catch(e) {}
})();

function persistState() {
  try {
    localStorage.setItem('nh_unlocked', JSON.stringify([...unlockedListings]));
    localStorage.setItem('nh_saved', JSON.stringify([...savedListings]));
  } catch(e) {}
}

// ════════════════════════════════════════════════════════════
// NAV & PAGE ROUTING
// ════════════════════════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  currentPage = id;
  const footer = document.getElementById('siteFooter');
  footer.style.display = (id === 'dashboard') ? 'none' : '';
  window.scrollTo({top:0,behavior:'smooth'});
  // Update nav active link
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-link'));
  if(id === 'listings') document.getElementById('navBrowse').classList.add('active-link');
  else if(id === 'register') document.getElementById('navList').classList.add('active-link');
  else if(id === 'dashboard') document.getElementById('navDash').classList.add('active-link');
  if(id === 'listings') { shownCount = 9; applyFilters(); }
  if(id === 'dashboard') initDashboard();
  if(id === 'saved') renderSaved();
  if(id === 'home') renderEstates();
}

function switchRole(role) {
  document.getElementById('navRenter').classList.toggle('active', role === 'renter');
  document.getElementById('navLandlord').classList.toggle('active', role === 'landlord');
  showPage(role === 'landlord' ? 'dashboard' : 'home');
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function scrollToHow() {
  showPage('home');
  setTimeout(() => {
    document.getElementById('howItWorks').scrollIntoView({behavior:'smooth',block:'start'});
  }, 100);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

// ════════════════════════════════════════════════════════════
// HERO SEARCH
// ════════════════════════════════════════════════════════════
function doHeroSearch() {
  const loc = document.getElementById('heroSearchLoc').value;
  const type = document.getElementById('heroSearchType').value;
  const budget = document.getElementById('heroSearchBudget').value;
  const amenity = document.getElementById('heroSearchAmenity').value;
  const county = document.getElementById('heroSearchCounty').value;
  if(loc) document.getElementById('filterLoc').value = loc;
  if(type) document.getElementById('filterType').value = type;
  if(budget) document.getElementById('filterBudget').value = budget;
  if(amenity) document.getElementById('filterAmenity').value = amenity;
  document.getElementById('filterCounty').value = county;
  showPage('listings');
}

// ════════════════════════════════════════════════════════════
// ESTATES (HOME PAGE)
// ════════════════════════════════════════════════════════════
function renderEstates() {
  const g = document.getElementById('estateGrid');
  if(!g) return;
  g.innerHTML = ESTATES.map(e => `
    <div class="estate-card" onclick="filterByEstate('${e.name}')">
      <div style="font-size:30px;margin-bottom:10px">${e.icon}</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:4px">${e.name}</div>
      <div style="font-size:13px;color:var(--ink-muted);margin-bottom:4px">${e.count} listings</div>
      <div style="font-size:12px;color:var(--green);font-weight:600">${e.range} avg</div>
    </div>
  `).join('');
}

function filterByEstate(name) {
  document.getElementById('filterLoc').value = name;
  showPage('listings');
}

// ════════════════════════════════════════════════════════════
// LISTINGS FILTER & RENDER
// ════════════════════════════════════════════════════════════
function applyFilters() {
  const loc = document.getElementById('filterLoc').value.toLowerCase().trim();
  const type = document.getElementById('filterType').value;
  const budgetVal = document.getElementById('filterBudget').value;
  const amenity = document.getElementById('filterAmenity').value || activeAmenityFilter;
  const county = document.getElementById('filterCounty').value;
  const sort = document.getElementById('sortSelect').value;

  let data = LISTINGS.filter(l => {
    if(loc && !l.area.toLowerCase().includes(loc) && !l.name.toLowerCase().includes(loc)) return false;
    const typeFilter = activeChipFilter || type;
    if(typeFilter && typeFilter !== '' && l.type !== typeFilter && typeFilter !== 'Furnished') return false;
    if(typeFilter === 'Furnished' && !l.amenities.includes('Furnished')) return false;
    if(budgetVal && l.price > parseInt(budgetVal)) return false;
    if(amenity && !l.amenities.includes(amenity)) return false;
    if(county && l.county !== county) return false;
    return true;
  });

  // Sort
  if(sort === 'price-asc') data.sort((a,b) => a.price - b.price);
  else if(sort === 'price-desc') data.sort((a,b) => b.price - a.price);
  else if(sort === 'popular') data.sort((a,b) => b.views - a.views);

  filteredData = data;
  renderListings(data);
  updateActiveFilters(loc, type, budgetVal, amenity, county);
}

function renderListings(data) {
  const grid = document.getElementById('listingsGrid');
  const empty = document.getElementById('emptyState');
  const shown = data.slice(0, shownCount);
  document.getElementById('listingCount').textContent = data.length;
  document.getElementById('shownCount').textContent = shown.length;
  document.getElementById('totalCount').textContent = data.length;
  const loadMoreWrap = document.getElementById('loadMoreWrap');

  if(data.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    loadMoreWrap.style.display = 'none';
    return;
  }
  empty.classList.add('hidden');
  loadMoreWrap.style.display = data.length <= shownCount ? 'none' : 'block';

  grid.innerHTML = shown.map(l => buildListingCard(l)).join('');
}

function buildListingCard(l) {
  const locked = l.locked && !unlockedListings.has(l.id);
  const isSaved = savedListings.has(l.id);
  return `
  <div class="listing-card${locked ? ' listing-locked' : ''}" onclick="openListing(${l.id})">
    <div class="listing-img">
      <div class="listing-img-placeholder">${l.icon}</div>
      <div class="listing-badge"><span class="badge badge-green">● ${l.badge}</span></div>
      <button class="listing-save" onclick="event.stopPropagation();toggleSave(${l.id},this)" title="Save listing">${isSaved?'❤️':'🤍'}</button>
      <div class="listing-views">👁️ ${l.views} views</div>
    </div>
    <div class="listing-body">
      <div class="listing-type">${l.type}</div>
      <div class="listing-name">${l.name}</div>
      <div class="listing-loc">
        <span>📍</span>
        <span class="listing-loc-text">${l.area}, Nairobi</span>
      </div>
      <div class="listing-price">KES ${l.price.toLocaleString()}<span>/month</span></div>
      <div class="listing-specs">
        ${l.beds > 0 ? `<div class="listing-spec">🛏️ ${l.beds} bed${l.beds>1?'s':''}</div>` : '<div class="listing-spec">🛏️ Bedsitter</div>'}
        <div class="listing-spec">🚿 ${l.baths} bath</div>
        <div class="listing-spec">📐 ${l.size}</div>
        <div class="listing-spec">🏢 ${l.floor}</div>
      </div>
      <div class="amenity-chips">
        ${l.amenities.slice(0,3).map(a=>`<span class="amenity-chip">${a}</span>`).join('')}
        ${l.amenities.length > 3 ? `<span class="amenity-chip">+${l.amenities.length-3} more</span>` : ''}
      </div>
      ${locked
        ? `<div class="unlock-bar">
            <div class="unlock-bar-text">🔒 Address & contacts locked</div>
            <button class="unlock-btn" onclick="event.stopPropagation();openMpesa(${l.id})">Unlock · KES 1,000</button>
           </div>`
        : `<div class="unlocked-bar"><span>✅ Contacts unlocked — tap to view</span></div>`
      }
    </div>
  </div>`;
}

function loadMore() {
  shownCount += 6;
  renderListings(filteredData);
}

function clearFilters() {
  document.getElementById('filterLoc').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('filterBudget').value = '';
  document.getElementById('filterAmenity').value = '';
  document.getElementById('filterCounty').value = '';
  activeChipFilter = '';
  activeAmenityFilter = '';
  document.querySelectorAll('.chip').forEach((c,i) => c.classList.toggle('active', i===0));
  shownCount = 9;
  applyFilters();
}

function setChip(el, filter) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeChipFilter = filter;
  activeAmenityFilter = '';
  shownCount = 9;
  applyFilters();
}

function setChipAmenity(el, amenity) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeChipFilter = '';
  activeAmenityFilter = amenity;
  shownCount = 9;
  applyFilters();
}

function updateActiveFilters(loc, type, budget, amenity, county) {
  const container = document.getElementById('activeFilters');
  const tags = [];
  if(loc) tags.push({label: '📍 ' + loc, clear: ()=>{document.getElementById('filterLoc').value='';applyFilters();}});
  if(type) tags.push({label: type, clear: ()=>{document.getElementById('filterType').value='';applyFilters();}});
  if(budget) tags.push({label: 'Under KES '+parseInt(budget).toLocaleString(), clear: ()=>{document.getElementById('filterBudget').value='';applyFilters();}});
  if(amenity) tags.push({label: amenity, clear: ()=>{document.getElementById('filterAmenity').value='';activeAmenityFilter='';applyFilters();}});
  if(county) tags.push({label: '🗺️ ' + county, clear: ()=>{document.getElementById('filterCounty').value='';applyFilters();}});
  container.innerHTML = tags.map((t,i) => `
    <div style="display:inline-flex;align-items:center;gap:6px;background:#F3F0FF;color:#7C3AED;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer" onclick="clearFilterTag(${i})">
      ${t.label} <span style="font-size:16px;line-height:1">×</span>
    </div>
  `).join('');
  container._clearFns = tags.map(t => t.clear);
}

function clearFilterTag(i) {
  const container = document.getElementById('activeFilters');
  if(container._clearFns && container._clearFns[i]) container._clearFns[i]();
}

// ════════════════════════════════════════════════════════════
// SAVE LISTINGS
// ════════════════════════════════════════════════════════════
function toggleSave(id, btn) {
  if(savedListings.has(id)) {
    savedListings.delete(id);
    if(btn) btn.textContent = '🤍';
    showToast('Removed from saved listings');
  } else {
    savedListings.add(id);
    if(btn) btn.textContent = '❤️';
    showToast('❤️ Saved to your wishlist');
  }
  persistState();
  updateSavedCount();
}

function updateSavedCount() {
  const el = document.getElementById('savedCount');
  el.textContent = savedListings.size;
  el.style.display = savedListings.size > 0 ? 'inline-flex' : 'none';
}

function showSaved() {
  showPage('saved');
}

function renderSaved() {
  const grid = document.getElementById('savedGrid');
  const empty = document.getElementById('savedEmpty');
  const saved = LISTINGS.filter(l => savedListings.has(l.id));
  if(saved.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    grid.innerHTML = saved.map(l => buildListingCard(l)).join('');
  }
}

function clearSaved() {
  savedListings.clear();
  persistState();
  updateSavedCount();
  renderSaved();
  showToast('All saved listings cleared');
}

// ════════════════════════════════════════════════════════════
// LISTING DETAIL MODAL
// ════════════════════════════════════════════════════════════
function openListing(id) {
  const l = LISTINGS.find(x => x.id === id);
  if(!l) return;
  currentListing = l;
  const locked = l.locked && !unlockedListings.has(id);

  document.getElementById('modalIcon').textContent = l.icon;
  document.getElementById('modalBadge').textContent = '● ' + l.badge;
  document.getElementById('modalViews').textContent = '👁️ ' + l.views + ' views';
  document.getElementById('modalTitle').textContent = l.name;
  document.getElementById('modalLoc').innerHTML = '📍 ' + l.area + ', Nairobi';
  document.getElementById('modalMeta').textContent = l.type + ' · ' + l.floor + ' · Listed today';
  document.getElementById('modalPrice').textContent = 'KES ' + l.price.toLocaleString() + '/month';
  document.getElementById('modalDeposit').textContent = 'Deposit: ' + l.deposit;
  document.getElementById('modalDesc').textContent = l.desc;
  document.getElementById('modalSaveBtn').textContent = savedListings.has(id) ? '❤️' : '🤍';

  document.getElementById('modalSpecs').innerHTML = [
    ['🛏️','Bedrooms', l.beds > 0 ? l.beds + ' bedroom' + (l.beds>1?'s':'') : 'Bedsitter / Studio'],
    ['🚿','Bathrooms', l.baths + ' bathroom' + (l.baths>1?'s':'')],
    ['📐','Floor Area', l.size],
    ['🏢','Floor / Level', l.floor],
  ].map(([ic,lb,val]) => `
    <div class="modal-spec">
      <div class="modal-spec-label">${ic} ${lb}</div>
      <div class="modal-spec-val">${val}</div>
    </div>
  `).join('');

  document.getElementById('modalAmenities').innerHTML = l.amenities.map(a => `<span class="amenity-chip">${a}</span>`).join('');

  if(!locked) {
    document.getElementById('contactSection').innerHTML = `
    <div class="contact-unlocked">
      <div style="font-size:13px;font-weight:700;color:var(--green);margin-bottom:14px">✅ Owner / Agent Details — Unlocked</div>
      <div class="contact-row">
        <div class="contact-icon">📞</div>
        <div class="contact-info"><label>Phone</label><p><a href="tel:${l.phone}" style="color:var(--green)">${l.phone}</a></p></div>
      </div>
      <div class="contact-row">
        <div class="contact-icon">💬</div>
        <div class="contact-info"><label>WhatsApp</label><p>${l.whatsapp ? '<a href="https://wa.me/'+l.whatsapp.replace(/\D/g,'')+'" style="color:var(--green)">'+l.whatsapp+'</a>' : 'Not provided'}</p></div>
      </div>
      <div class="contact-row">
        <div class="contact-icon">📍</div>
        <div class="contact-info"><label>Full Address</label><p>${l.fullAddress}</p></div>
      </div>
      <div class="contact-row">
        <div class="contact-icon">👤</div>
        <div class="contact-info"><label>Contact Person</label><p>${l.contact}</p></div>
      </div>
      <div style="margin-top:14px;display:flex;gap:10px">
        <a href="tel:${l.phone}" class="btn btn-primary" style="flex:1;text-decoration:none;justify-content:center">📞 Call Now</a>
        ${l.whatsapp ? `<a href="https://wa.me/${l.whatsapp.replace(/\D/g,'')}" class="btn btn-ghost" style="flex:1;text-decoration:none;justify-content:center">💬 WhatsApp</a>` : ''}
      </div>
    </div>`;
  } else {
    document.getElementById('contactSection').innerHTML = `
    <div class="contact-locked">
      <div class="contact-locked-icon">🔒</div>
      <h4>Full address & contacts are locked</h4>
      <p>Pay <strong>KES 1,000</strong> via M-Pesa to instantly reveal the owner's phone number, WhatsApp, and the full property address. One-time payment per listing.</p>
      <button class="btn btn-amber btn-lg w-full" onclick="closeModal();openMpesa(${id})">📱 Unlock for KES 1,000</button>
    </div>`;
  }
  document.getElementById('listingModal').classList.add('open');
}

function closeModal() {
  document.getElementById('listingModal').classList.remove('open');
}

function toggleSaveFromModal() {
  if(!currentListing) return;
  const btn = document.getElementById('modalSaveBtn');
  toggleSave(currentListing.id, btn);
  // Re-render cards if on listings page
  if(currentPage === 'listings') renderListings(filteredData);
}

function shareListingWhatsApp() {
  if(!currentListing) return;
  const msg = encodeURIComponent(`Check out this listing on Makao Hub: ${currentListing.name} in ${currentListing.area} — KES ${currentListing.price.toLocaleString()}/month`);
  window.open('https://wa.me/?text=' + msg, '_blank');
}

// ════════════════════════════════════════════════════════════
// M-PESA FLOW
// ════════════════════════════════════════════════════════════
function openMpesa(id) {
  const l = LISTINGS.find(x => x.id === id);
  currentListing = l;
  document.getElementById('mpesaListing').textContent = l.name;
  document.getElementById('mpesaPhone').value = '';
  document.getElementById('mpesaPhoneErr').classList.remove('show');
  document.getElementById('mpesaNormal').style.display = 'block';
  document.getElementById('mpesaProcessing').style.display = 'none';
  document.getElementById('mpesaModal').classList.add('open');
}

function validateMpesaPhone(input) {
  const val = input.value.replace(/\D/g,'');
  input.value = val;
  const err = document.getElementById('mpesaPhoneErr');
  if(val.length > 0 && (val.length !== 9 || !['7','1'].includes(val[0]))) {
    err.classList.add('show');
  } else {
    err.classList.remove('show');
  }
}

function processMpesa() {
  const phone = document.getElementById('mpesaPhone').value.replace(/\D/g,'');
  const err = document.getElementById('mpesaPhoneErr');
  if(!phone || phone.length !== 9 || !['7','1'].includes(phone[0])) {
    err.classList.add('show');
    return;
  }
  err.classList.remove('show');
  document.getElementById('mpesaNormal').style.display = 'none';
  document.getElementById('mpesaProcessing').style.display = 'block';
  showToast('📱 STK Push sent to +254 ' + phone + ' — check your phone');

  setTimeout(() => {
    document.getElementById('mpesaModal').classList.remove('open');
    document.getElementById('mpesaProcessing').style.display = 'none';
    document.getElementById('mpesaNormal').style.display = 'block';
    showToast('✅ Payment confirmed! KES 1,000 received. Contacts unlocked.');
    if(currentListing) {
      unlockedListings.add(currentListing.id);
      persistState();
      if(currentPage === 'listings') renderListings(filteredData);
      setTimeout(() => openListing(currentListing.id), 600);
    }
  }, 3000);
}

// ════════════════════════════════════════════════════════════
// DASHBOARD INIT
// ════════════════════════════════════════════════════════════
function initDashboard() {
  document.getElementById('dashDate').textContent = new Date().toLocaleDateString('en-KE',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  buildRentTable();
  buildRevenueChart();
  buildListingPerf();
  buildMyListings();
  buildTenants();
  buildRentDetail();
  buildPayments();
  buildMaintenance();
  buildFAQ();
}

function buildRentTable() {
  const body = document.getElementById('rentTableBody');
  if(!body) return;
  body.innerHTML = TENANTS.map(t => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:30px;height:30px;border-radius:50%;background:${t.bg};color:${t.color};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">${t.initials}</div>
          <div style="font-weight:600">${t.name}</div>
        </div>
      </td>
      <td style="color:var(--ink-muted);font-size:12px">${t.unit}</td>
      <td style="font-weight:700">KES ${t.rent.toLocaleString()}</td>
      <td style="font-size:12px;color:var(--ink-muted)">1 Jun 2026</td>
      <td><span class="rent-status rent-${t.status}">● ${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span></td>
      <td>
        ${t.status !== 'paid' ? `<button class="btn btn-sm btn-amber" onclick="sendReminder('${t.name}')">📱 Remind</button>` : '<span style="color:var(--ink-muted);font-size:12px">–</span>'}
      </td>
    </tr>
  `).join('');
}

function buildRevenueChart() {
  const chart = document.getElementById('revenueChart');
  if(!chart) return;
  const maxVal = Math.max(...REVENUE);
  chart.innerHTML = REVENUE.map((v,i) => `
    <div class="mini-bar${i===11?' highlight':''}" style="height:${Math.round((v/maxVal)*100)}%;position:relative" title="${REVENUE_LABELS[i]}: KES ${v}k">
    </div>
  `).join('');

  const breakdown = document.getElementById('revenueBreakdown');
  if(breakdown) {
    const props = [
      {name:'Kileleshwa (2 units)',amount:'KES 70k',pct:100},
      {name:'Karen (1 unit)',amount:'KES 47k',pct:67},
      {name:'Westlands (1 unit)',amount:'KES 28k',pct:40},
      {name:'South B (1 unit)',amount:'KES 22k',pct:31},
      {name:'Ruaka (1 unit)',amount:'KES 18.5k',pct:26},
    ];
    breakdown.innerHTML = props.map(p => `
      <div>
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
          <span style="color:var(--ink-mid)">${p.name}</span>
          <span style="font-weight:700">${p.amount}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill green" style="width:${p.pct}%"></div></div>
      </div>
    `).join('');
  }
}

function buildListingPerf() {
  const body = document.getElementById('listingPerfBody');
  if(!body) return;
  const perfData = [
    {name:'2BR Apartment',area:'Kileleshwa',rent:'35,000',views:142,unlocks:8,income:'KES 70,000',status:'Active'},
    {name:'1BR Apartment',area:'Kileleshwa',rent:'35,000',views:98,unlocks:5,income:'KES 35,000',status:'Active'},
    {name:'3BR Maisonette',area:'Karen',rent:'95,000',views:68,unlocks:4,income:'KES 47,500',status:'Active'},
    {name:'Studio Apartment',area:'Westlands',rent:'28,000',views:187,unlocks:11,income:'KES 28,000',status:'Active'},
    {name:'Bedsitter',area:'South B',rent:'10,000',views:62,unlocks:3,income:'KES 20,000',status:'Active'},
  ];
  body.innerHTML = perfData.map(p => `
    <tr>
      <td style="font-weight:600">${p.name}</td>
      <td style="color:var(--ink-muted);font-size:12px">📍 ${p.area}</td>
      <td style="font-weight:700;color:var(--green)">KES ${p.rent}<span style="color:var(--ink-muted);font-weight:400">/mo</span></td>
      <td>${p.views}</td>
      <td><span class="badge badge-green">${p.unlocks} enquiries</span></td>
      <td style="font-weight:700">${p.income}</td>
      <td><span class="badge badge-green">● ${p.status}</span></td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="showToast('✏️ Edit listing form coming soon')">Edit</button>
          <button class="btn btn-ghost btn-sm" onclick="showToast('🔄 Listing renewed for 30 days')">Renew</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function buildMyListings() {
  const container = document.getElementById('myListingsCards');
  if(!container) return;
  const myListings = LISTINGS.slice(0, 4);
  container.innerHTML = myListings.map(l => `
    <div class="dash-section" style="margin-bottom:0">
      <div style="padding:18px 20px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div style="font-size:40px">${l.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:15px;margin-bottom:2px">${l.name}</div>
          <div style="font-size:13px;color:var(--ink-muted)">📍 ${l.area}, Nairobi · ${l.type} · ${l.floor}</div>
          <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
            <span class="badge badge-green">● Active</span>
            <span class="badge badge-grey">👁️ ${l.views} views</span>
            <span class="badge badge-blue">${l.unlocks} unlocks</span>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:20px;font-weight:800;color:var(--green)">KES ${l.price.toLocaleString()}<span style="font-size:13px;font-weight:400;color:var(--ink-muted)">/mo</span></div>
          <div style="font-size:12px;color:var(--ink-muted);margin-top:2px">Expires 16 Jul 2026</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">
          <button class="btn btn-outline btn-sm" onclick="showToast('✏️ Edit form coming soon')">Edit</button>
          <button class="btn btn-ghost btn-sm" onclick="openListing(${l.id})">Preview</button>
          <button class="btn btn-ghost btn-sm" style="color:var(--red);border-color:var(--red)" onclick="showToast('⚠️ Listing paused — no longer shown in search')">Pause</button>
        </div>
      </div>
    </div>
  `).join('');
}

function buildTenants() {
  const grid = document.getElementById('tenantsGrid');
  if(!grid) return;
  grid.innerHTML = TENANTS.map(t => `
    <div class="tenant-card">
      <div class="tenant-avatar" style="background:${t.bg};color:${t.color}">${t.initials}</div>
      <div class="tenant-info">
        <div class="tenant-name">${t.name}</div>
        <div class="tenant-unit">${t.unit}</div>
        <div class="tenant-meta">
          <span class="rent-status rent-${t.status}">● ${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span>
          <span style="font-size:12px;color:var(--ink-muted)">KES ${t.rent.toLocaleString()}/mo</span>
          <span style="font-size:12px;color:var(--ink-muted)">Since ${t.since}</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">
        <button class="btn btn-ghost btn-sm" onclick="showToast('📞 Calling ${t.name}...')">📞 Call</button>
        ${t.status !== 'paid' ? `<button class="btn btn-sm btn-amber" onclick="sendReminder('${t.name}')">📱 Remind</button>` : ''}
      </div>
    </div>
  `).join('');
}

function buildRentDetail() {
  const body = document.getElementById('rentDetailBody');
  if(!body) return;
  body.innerHTML = TENANTS.map(t => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:50%;background:${t.bg};color:${t.color};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">${t.initials}</div>
          <div style="font-weight:600;font-size:13px">${t.name}</div>
        </div>
      </td>
      <td style="font-size:12px;color:var(--ink-muted)">${t.unit}</td>
      <td style="font-weight:700">KES ${t.rent.toLocaleString()}</td>
      <td style="font-size:12px;color:var(--ink-muted)">1 Jun 2026</td>
      <td style="font-size:12px;color:var(--ink-muted)">${t.status === 'paid' ? '5 Jun 2026' : '—'}</td>
      <td><span style="font-size:12px">${t.status === 'paid' ? '📱 M-Pesa' : '—'}</span></td>
      <td><span class="rent-status rent-${t.status}">● ${t.status.charAt(0).toUpperCase()+t.status.slice(1)}</span></td>
      <td>${t.status !== 'paid' ? `<button class="btn btn-sm btn-amber" onclick="sendReminder('${t.name}')">📱 Remind</button>` : '<span style="color:var(--ink-muted)">–</span>'}</td>
    </tr>
  `).join('');
}

function buildPayments() {
  const body = document.getElementById('paymentsBody');
  if(!body) return;
  body.innerHTML = PAYMENTS_LOG.map(p => `
    <tr>
      <td style="font-size:12px;color:var(--ink-muted);white-space:nowrap">${p.date}</td>
      <td style="font-size:13px">${p.from}</td>
      <td style="font-weight:700;color:var(--green)">${p.amount}</td>
      <td style="font-family:monospace;font-size:12px;color:var(--ink-muted)">${p.ref}</td>
      <td style="font-size:12px;color:var(--ink-muted)">${p.property}</td>
      <td><span class="rent-status rent-paid">● ${p.status}</span></td>
    </tr>
  `).join('');
}

function buildMaintenance(filter) {
  const list = document.getElementById('maintenanceList');
  if(!list) return;
  let data = MAINTENANCE;
  if(filter) data = data.filter(m => m.status === filter);
  list.innerHTML = data.map(m => `
    <div class="maintenance-card">
      <div class="maintenance-header">
        <div>
          <div class="maintenance-title">${m.title}</div>
          <div class="maintenance-meta">${m.unit} · ${m.tenant} · ${m.date}</div>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <span class="badge priority-${m.priority}">${m.priority.charAt(0).toUpperCase()+m.priority.slice(1)}</span>
          <span class="badge badge-grey">${m.status.replace('-',' ')}</span>
          <span class="badge badge-grey">${m.id}</span>
        </div>
      </div>
      <p style="font-size:13px;color:var(--ink-muted);margin-bottom:14px;line-height:1.5">${m.desc}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${m.status !== 'resolved' ? `<button class="btn btn-sm btn-primary" onclick="showToast('✅ Maintenance request ${m.id} marked as in progress')">Mark In Progress</button>` : ''}
        ${m.status !== 'resolved' ? `<button class="btn btn-sm btn-ghost" onclick="showToast('✅ Request ${m.id} marked as resolved')">Mark Resolved</button>` : '<span style="font-size:12px;color:var(--green);font-weight:600">✅ Resolved</span>'}
        <button class="btn btn-sm btn-ghost" onclick="showToast('📞 Calling ${m.tenant}...')">Contact Tenant</button>
      </div>
    </div>
  `).join('') || '<div class="empty-state"><div class="empty-state-icon">🔧</div><h3>No requests found</h3></div>';
}

function filterMaintenance(val) {
  currentMaintFilter = val;
  buildMaintenance(val);
}

function buildFAQ() {
  const list = document.getElementById('faqList');
  if(!list) return;
  list.innerHTML = FAQS.map((f,i) => `
    <div style="border:1px solid var(--border);border-radius:var(--r-sm);overflow:hidden">
      <button style="width:100%;text-align:left;padding:16px;font-size:14px;font-weight:600;color:var(--ink);background:#FAFAFA;display:flex;justify-content:space-between;align-items:center;border:none;cursor:pointer" onclick="toggleFAQ(${i})">
        ${f.q}
        <span id="faq-arrow-${i}" style="font-size:18px;transition:transform .2s;flex-shrink:0">+</span>
      </button>
      <div id="faq-body-${i}" style="display:none;padding:16px;font-size:14px;color:var(--ink-muted);line-height:1.6;border-top:1px solid var(--border)">${f.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const body = document.getElementById('faq-body-' + i);
  const arrow = document.getElementById('faq-arrow-' + i);
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  arrow.textContent = open ? '+' : '–';
  arrow.style.transform = open ? '' : 'rotate(45deg)';
}

// ════════════════════════════════════════════════════════════
// DASHBOARD NAV
// ════════════════════════════════════════════════════════════
function setDashTab(el, tab) {
  document.querySelectorAll('.dash-nav-item').forEach(i => i.classList.remove('active'));
  if(el) el.classList.add('active');
  document.querySelectorAll('.dash-tab-content').forEach(d => d.classList.remove('active'));
  const t = document.getElementById('dash-' + tab);
  if(t) t.classList.add('active');
}

// ════════════════════════════════════════════════════════════
// REMINDERS
// ════════════════════════════════════════════════════════════
function sendReminder(name) {
  showToast('📱 Rent reminder sent to ' + name + ' via SMS');
}

function sendAllReminders() {
  const pending = TENANTS.filter(t => t.status !== 'paid');
  pending.forEach(t => {
    setTimeout(() => showToast('📱 Reminder sent to ' + t.name), 300);
  });
  showToast(`📱 Sending reminders to ${pending.length} tenants...`);
}

// ════════════════════════════════════════════════════════════
// REGISTER FORM
// ════════════════════════════════════════════════════════════
function updateRegProgress() {
  const fields = [
    document.getElementById('regTitle'),
    document.getElementById('regType'),
    document.getElementById('regCounty'),
    document.getElementById('regArea'),
    document.getElementById('regAddress'),
    document.getElementById('regRent'),
    document.getElementById('regName'),
    document.getElementById('regPhone'),
  ];
  const filled = fields.filter(f => f && f.value.trim() !== '' && f.value !== f.options?.[0]?.value).length;
  const pct = Math.round((filled / fields.length) * 100);
  const bar = document.getElementById('regProgressBar');
  const label = document.getElementById('regProgressPct');
  if(bar) bar.style.width = pct + '%';
  if(label) label.textContent = pct + '%';
  // Update dots
  if(pct >= 30) document.getElementById('rdot2').style.background = 'var(--green)';
  if(pct >= 60) document.getElementById('rdot3').style.background = 'var(--green)';
  if(pct >= 90) document.getElementById('rdot4').style.background = 'var(--green)';
}

function selectPlan(el, plan) {
  document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('regPlan').value = plan;
}

function triggerPhotoUpload() {
  document.getElementById('photoInput').click();
}

function handlePhotoUpload(input) {
  const preview = document.getElementById('photoPreview');
  const files = Array.from(input.files).slice(0, 10);
  preview.innerHTML = '';
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const div = document.createElement('div');
      div.style.cssText = 'width:80px;height:80px;border-radius:8px;overflow:hidden;border:1px solid var(--border);position:relative';
      div.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover"><button onclick="this.parentNode.remove()" style="position:absolute;top:2px;right:2px;width:18px;height:18px;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;border:none;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;padding:0">×</button>`;
      preview.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
  showToast('📸 ' + files.length + ' photo' + (files.length>1?'s':'') + ' uploaded');
}

// ── Pick Location (GPS → reverse geocode → fill address) ──
function pickLocation() {
  const btn = document.getElementById('pickLocationBtn');
  const status = document.getElementById('pickLocationStatus');
  const input = document.getElementById('regAddress');

  if (!navigator.geolocation) {
    showStatus('❌ Your browser does not support location access.', 'error');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '⏳ Locating…';
  showStatus('📡 Getting your GPS coordinates…', 'info');

  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      showStatus('🌐 Found location — looking up address…', 'info');

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`)
        .then(r => r.json())
        .then(data => {
          const a = data.address || {};
          // Build a readable address from the parts available
          const parts = [
            a.house_number,
            a.road || a.pedestrian,
            a.suburb || a.neighbourhood || a.quarter,
            a.city_district || a.county,
            a.city || a.town || a.village,
            a.state
          ].filter(Boolean);

          const address = parts.length ? parts.join(', ') : data.display_name;
          input.value = address;
          updateRegProgress();
          showStatus(`✅ Address filled from GPS. Review and correct any details.`, 'success');
          btn.disabled = false;
          btn.innerHTML = '📍 Pick Location';
        })
        .catch(() => {
          // Fallback: just put coordinates if reverse geocode fails
          input.value = `GPS: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          showStatus('⚠️ Could not look up address — coordinates added. Please type the full address manually.', 'warn');
          btn.disabled = false;
          btn.innerHTML = '📍 Pick Location';
        });
    },
    err => {
      const msgs = {1:'Location access denied. Please allow location in your browser settings.', 2:'Could not determine your location. Try again.', 3:'Location request timed out. Try again.'};
      showStatus('❌ ' + (msgs[err.code] || 'Location error.'), 'error');
      btn.disabled = false;
      btn.innerHTML = '📍 Pick Location';
    },
    { timeout: 10000, enableHighAccuracy: true }
  );

  function showStatus(msg, type) {
    const colors = {
      info:    { bg:'#EFF6FF', border:'#BFDBFE', color:'#1D4ED8' },
      success: { bg:'var(--green-tint)', border:'var(--green-light)', color:'var(--green-mid)' },
      warn:    { bg:'#FEF3C7', border:'#FDE68A', color:'#92400E' },
      error:   { bg:'#FEE2E2', border:'#FECACA', color:'#DC2626' }
    };
    const c = colors[type] || colors.info;
    status.style.display = 'block';
    status.style.background = c.bg;
    status.style.border = `1px solid ${c.border}`;
    status.style.color = c.color;
    status.textContent = msg;
  }
}

function triggerVideoUpload() {
  document.getElementById('videoInput').click();
}

function handleVideoUpload(input) {
  const preview = document.getElementById('videoPreview');
  const files = Array.from(input.files).slice(0, 3);
  // Check sizes (100 MB max each)
  const oversized = files.filter(f => f.size > 100 * 1024 * 1024);
  if (oversized.length) {
    showToast('⚠️ ' + oversized.length + ' video(s) exceed 100 MB and were skipped');
  }
  const valid = files.filter(f => f.size <= 100 * 1024 * 1024);
  preview.innerHTML = '';
  valid.forEach(file => {
    const url = URL.createObjectURL(file);
    const div = document.createElement('div');
    div.style.cssText = 'position:relative;border-radius:8px;overflow:hidden;border:1px solid #C084FC;background:#0F1923';
    div.innerHTML = `
      <video src="${url}" style="width:180px;height:100px;object-fit:cover;display:block" controls muted></video>
      <div style="font-size:11px;color:#C084FC;padding:4px 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px">${file.name}</div>
      <button onclick="URL.revokeObjectURL('${url}');this.parentNode.remove()" style="position:absolute;top:4px;right:4px;width:20px;height:20px;border-radius:50%;background:rgba(0,0,0,.7);color:#fff;border:none;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;padding:0">×</button>`;
    preview.appendChild(div);
  });
  if (valid.length) showToast('🎥 ' + valid.length + ' video' + (valid.length>1?'s':'') + ' added');
}

const COUNTY_AREAS = {
  'Nairobi': ['Kilimani','Kileleshwa','Westlands','Karen','Lang\'ata','South B','South C','Eastleigh','Roysambu','Kasarani','Embakasi','Ngong Road','Lavington','Spring Valley','Runda','Muthaiga','Parklands','Gigiri','Ridgeways','Loresho'],
  'Kiambu': ['Ruaka','Thika Road','Kiambu Town','Githunguri','Limuru','Kikuyu','Banana','Karura','Juja','Gatundu'],
  'Machakos': ['Machakos Town','Athi River','Mlolongo','Syokimau','Mavoko','Kangundo','Tala'],
  'Kajiado': ['Rongai','Ngong','Kiserian','Kitengela','Isinya','Namanga','Kajiado Town'],
  'Nakuru': ['Nakuru Town','Naivasha','Gilgil','Molo','Njoro','Subukia'],
  'Mombasa': ['Nyali','Bamburi','Shanzu','Likoni','Changamwe','Mikindani','Old Town'],
  'Kisumu': ['Kisumu CBD','Milimani','Mamboleo','Nyalenda','Kondele','Kibos'],
  'Uasin Gishu': ['Eldoret','Kapsabet','Burnt Forest','Turbo'],
  'Meru': ['Meru Town','Nkubu','Timau','Maua'],
  'Nyeri': ['Nyeri Town','Karatina','Othaya','Mukurweini'],
  'Kirinyaga': ['Kerugoya','Kutus','Sagana','Wanguru'],
  'Murang\'a': ['Murang\'a Town','Maragua','Kangema','Kenol'],
  'Nyandarua': ['Ol Kalou','Engineer','Nyahururu'],
  'Laikipia': ['Nanyuki','Rumuruti','Nyahururu'],
};

function updateAreasByCounty() {
  const county = document.getElementById('regCounty').value;
  const areaSelect = document.getElementById('regArea');
  const areas = COUNTY_AREAS[county] || [];
  areaSelect.innerHTML = '<option value="">Select area</option>';
  if (areas.length) {
    areas.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a; opt.textContent = a;
      areaSelect.appendChild(opt);
    });
  } else {
    // fallback: show all areas
    ['Kilimani','Kileleshwa','Westlands','Karen','Lang\'ata','South B','South C','Eastleigh','Roysambu','Ruaka','Kasarani','Embakasi','Ngong Road','Lavington','Spring Valley','Runda','Muthaiga','Parklands','Gigiri','Ridgeways','Loresho','Rongai','Athi River','Thika Road'].forEach(a => {
      const opt = document.createElement('option');
      opt.value = a; opt.textContent = a;
      areaSelect.appendChild(opt);
    });
  }
}

function submitListing() {
  let valid = true;
  const checks = [
    {id:'regTitle',err:'regTitleErr'},
    {id:'regType',err:'regTypeErr',notVal:''},
    {id:'regCounty',err:'regCountyErr',notVal:''},
    {id:'regArea',err:'regAreaErr',notVal:''},
    {id:'regAddress',err:'regAddressErr'},
    {id:'regName',err:'regNameErr'},
    {id:'regPhone',err:'regPhoneErr'},
  ];
  checks.forEach(c => {
    const el = document.getElementById(c.id);
    const err = document.getElementById(c.err);
    const val = el.value.trim();
    const isEmpty = c.notVal !== undefined ? val === c.notVal : val === '';
    const rent = document.getElementById('regRent');
    if(c.id === 'regRent' && (!rent.value || parseInt(rent.value) < 1000)) {
      err.classList.add('show'); el.classList.add('error'); valid = false; return;
    }
    if(isEmpty) {
      if(err) err.classList.add('show');
      if(el) el.classList.add('error');
      valid = false;
    } else {
      if(err) err.classList.remove('show');
      if(el) el.classList.remove('error');
    }
  });
  if(!document.getElementById('regConsent').checked) {
    showToast('⚠️ Please agree to the terms and conditions');
    valid = false;
  }
  if(!valid) { showToast('⚠️ Please fill in all required fields'); return; }

  const ref = 'NH-' + Math.random().toString(36).substr(2,6).toUpperCase();
  document.getElementById('regRef').textContent = ref;
  document.getElementById('registerFormWrap').style.display = 'none';
  document.getElementById('registerSuccess').style.display = 'flex';
  showToast('🎉 Listing submitted! Reference: ' + ref);
}

function resetRegisterForm() {
  document.getElementById('registerFormWrap').style.display = '';
  document.getElementById('registerSuccess').style.display = 'none';
  document.querySelectorAll('#page-register .input').forEach(el => { el.value = ''; el.classList.remove('error'); });
  document.querySelectorAll('#page-register input[type="checkbox"]').forEach(el => el.checked = false);
  updateRegProgress();
}

// ════════════════════════════════════════════════════════════
// SETTINGS TOGGLES
// ════════════════════════════════════════════════════════════
function toggleSetting(btn) {
  btn.classList.toggle('on');
  showToast('✅ Setting updated');
}

// ════════════════════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ════════════════════════════════════════════════════════════
// MODAL CLOSE ON OVERLAY
// ════════════════════════════════════════════════════════════
document.getElementById('listingModal').addEventListener('click', function(e) {
  if(e.target === this) closeModal();
});
document.getElementById('mpesaModal').addEventListener('click', function(e) {
  if(e.target === this) this.classList.remove('open');
});
document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape') {
    document.getElementById('listingModal').classList.remove('open');
    document.getElementById('mpesaModal').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  }
});

// ════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════
renderEstates();
filteredData = LISTINGS;
updateSavedCount();
document.getElementById('heroListingCount').textContent = LISTINGS.length + '+';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
