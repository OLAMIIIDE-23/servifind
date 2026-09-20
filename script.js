/* =====================================================
   SERVIFIND JAVASCRIPT
===================================================== */


/* ================= PROVIDER DATABASE ================= */

const providers = [

    {
        id: 1,
        name: "Ade Plumbing Services",
        service: "Plumber",
        category: "Home",
        state: "Lagos",
        city: "Ikeja",
        area: "Allen Avenue",
        price: 8500,
        distance: 2.4,
        rating: 4.9,
        reviews: 124,
        phone: "+2348011111111",
        whatsapp: "2348011111111",
        tags: [
            "Leak repair",
            "Installation"
        ],
        initials: "AP"
    },


    {
        id: 2,
        name: "Bright Spark Electricals",
        service: "Electrician",
        category: "Home",
        state: "Lagos",
        city: "Surulere",
        area: "Adeniran Ogunsanya",
        price: 12000,
        distance: 5.8,
        rating: 4.8,
        reviews: 91,
        phone: "+2348022222222",
        whatsapp: "2348022222222",
        tags: [
            "Wiring",
            "Generator"
        ],
        initials: "BS"
    },


    {
        id: 3,
        name: "CleanPro Lagos",
        service: "Cleaner",
        category: "Cleaning",
        state: "Lagos",
        city: "Yaba",
        area: "Herbert Macaulay",
        price: 7000,
        distance: 7.2,
        rating: 4.7,
        reviews: 68,
        phone: "+2348033333333",
        whatsapp: "2348033333333",
        tags: [
            "Deep clean",
            "Office"
        ],
        initials: "CL"
    },


    {
        id: 4,
        name: "CoolTech AC Services",
        service: "AC Technician",
        category: "Home",
        state: "Lagos",
        city: "Lekki",
        area: "Admiralty Way",
        price: 15000,
        distance: 11.5,
        rating: 4.9,
        reviews: 73,
        phone: "+2348044444444",
        whatsapp: "2348044444444",
        tags: [
            "AC repair",
            "Maintenance"
        ],
        initials: "CT"
    },


    {
        id: 5,
        name: "Prime Auto Care",
        service: "Mechanic",
        category: "Auto",
        state: "Lagos",
        city: "Ojota",
        area: "Ikorodu Road",
        price: 18000,
        distance: 14.1,
        rating: 4.6,
        reviews: 54,
        phone: "+2348055555555",
        whatsapp: "2348055555555",
        tags: [
            "Diagnostics",
            "Brakes"
        ],
        initials: "PA"
    },


    {
        id: 6,
        name: "FixRight Carpentry",
        service: "Carpenter",
        category: "Home",
        state: "Oyo",
        city: "Ibadan",
        area: "Bodija",
        price: 10000,
        distance: 21.3,
        rating: 4.8,
        reviews: 47,
        phone: "+2348066666666",
        whatsapp: "2348066666666",
        tags: [
            "Furniture",
            "Doors"
        ],
        initials: "FR"
    },


    {
        id: 7,
        name: "NaijaTech Repairs",
        service: "Phone Repair",
        category: "Tech",
        state: "Abuja (FCT)",
        city: "Garki",
        area: "Area 11",
        price: 9000,
        distance: 24.5,
        rating: 4.7,
        reviews: 86,
        phone: "+2348077777777",
        whatsapp: "2348077777777",
        tags: [
            "Screens",
            "Battery"
        ],
        initials: "NR"
    },


    {
        id: 8,
        name: "Royal Caterers",
        service: "Caterer",
        category: "Events",
        state: "Rivers",
        city: "Port Harcourt",
        area: "GRA",
        price: 35000,
        distance: 31.2,
        rating: 4.9,
        reviews: 38,
        phone: "+2348088888888",
        whatsapp: "2348088888888",
        tags: [
            "Events",
            "Parties"
        ],
        initials: "RC"
    },


    {
        id: 9,
        name: "FreshPaint Nigeria",
        service: "Painter",
        category: "Home",
        state: "Ogun",
        city: "Abeokuta",
        area: "Oke Ilewo",
        price: 22000,
        distance: 35.7,
        rating: 4.5,
        reviews: 32,
        phone: "+2348099999999",
        whatsapp: "2348099999999",
        tags: [
            "Interior",
            "Exterior"
        ],
        initials: "FP"
    }

];


/* ================= SERVICE CATEGORIES ================= */

const categories = [

    ["🔧", "Plumber", "Home"],

    ["⚡", "Electrician", "Home"],

    ["🧹", "Cleaner", "Cleaning"],

    ["❄️", "AC Technician", "Home"],

    ["🚗", "Mechanic", "Auto"],

    ["🪚", "Carpenter", "Home"],

    ["📱", "Phone Repair", "Tech"],

    ["🍽️", "Caterer", "Events"],

    ["🎨", "Painter", "Home"],

    ["💻", "IT Support", "Tech"],

    ["💇", "Barber", "Personal"],

    ["📸", "Photographer", "Events"]

];


/* ================= APPLICATION STATE ================= */

let state = {

    favourites:
        JSON.parse(
            localStorage.getItem(
                "servifindFavourites"
            ) || "[]"
        ),

    bookings:
        JSON.parse(
            localStorage.getItem(
                "servifindBookings"
            ) || "[]"
        ),

    messages:
        JSON.parse(
            localStorage.getItem(
                "servifindMessages"
            ) || "[]"
        ),

    user:
        JSON.parse(
            localStorage.getItem(
                "servifindUser"
            ) || "null"
        ),

    coords: null,

    search: ""

};


/* ================= HELPERS ================= */

const $ = id =>
    document.getElementById(id);


function getProvider(id) {

    return providers.find(
        provider =>
            provider.id === Number(id)
    );

}


function money(number) {

    return "₦" +
        Number(number)
            .toLocaleString("en-NG");

}


function save() {

    localStorage.setItem(
        "servifindFavourites",
        JSON.stringify(
            state.favourites
        )
    );

    localStorage.setItem(
        "servifindBookings",
        JSON.stringify(
            state.bookings
        )
    );

    localStorage.setItem(
        "servifindMessages",
        JSON.stringify(
            state.messages
        )
    );

    localStorage.setItem(
        "servifindUser",
        JSON.stringify(
            state.user
        )
    );

}


/* ================= TOAST ================= */

function toast(message) {

    const toastElement =
        $("toast");

    toastElement.textContent =
        message;

    toastElement.classList.add(
        "show"
    );

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            toastElement.classList.remove(
                "show"
            );

        }, 2600);

}


/* ================= CATEGORIES ================= */

function renderCategories() {

    $("categoryGrid").innerHTML =
        categories.map(
            ([icon, name]) => {

                return `

                <button
                    class="category-card"
                    data-category="${name}"
                >

                    <div class="emoji">
                        ${icon}
                    </div>

                    <strong>
                        ${name}
                    </strong>

                </button>

                `;

            }
        ).join("");


    document
        .querySelectorAll(
            ".category-card"
        )
        .forEach(button => {

            button.onclick = () => {

                $("heroSearch").value =
                    button.dataset.category;

                state.search =
                    button.dataset.category;

                renderProviders();

                $("providers")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            };

        });


    const services =
        [
            ...new Set(
                providers.map(
                    provider =>
                        provider.service
                )
            )
        ].sort();


    $("serviceFilter").innerHTML =

        `
        <option value="">
            All services
        </option>
        ` +

        services
            .map(
                service =>
                    `<option>${service}</option>`
            )
            .join("");

}


/* ================= PROVIDER CARD ================= */

function providerCard(provider) {

    const favourite =
        state.favourites.includes(
            provider.id
        );


    return `

    <article class="provider-card">


        <button
            class="fav-btn ${
                favourite
                    ? "active"
                    : ""
            }"
            data-action="fav"
            data-id="${provider.id}"
        >

            ${
                favourite
                    ? "♥"
                    : "♡"
            }

        </button>


        <div class="provider-head">

            <div class="avatar">
                ${provider.initials}
            </div>


            <div>

                <h3>
                    ${provider.name}
                </h3>

                <div class="provider-meta">

                    ${provider.service}

                    ·

                    ${provider.city},
                    ${provider.state}

                </div>

                <div class="verified">
                    ✓ VERIFIED PROVIDER
                </div>

            </div>

        </div>


        <div class="rating">

            <strong>
                ★ ${provider.rating}
            </strong>

            <span class="muted">
                (${provider.reviews} reviews)
            </span>

        </div>


        <div class="chips">

            ${
                provider.tags
                    .map(
                        tag =>
                            `
                            <span class="chip">
                                ${tag}
                            </span>
                            `
                    )
                    .join("")
            }

        </div>


        <div class="price-distance">

            <span>
                From
                <b>
                    ${money(provider.price)}
                </b>
            </span>

            <span>
                📍
                ${provider.distance}
                km
            </span>

        </div>


        <div class="provider-actions">

            <button
                data-action="book"
                data-id="${provider.id}"
            >
                Book
            </button>


            <button
                data-action="message"
                data-id="${provider.id}"
            >
                Message
            </button>


            <button
                data-action="review"
                data-id="${provider.id}"
            >
                Review
            </button>

        </div>


        <div
            style="
                display:flex;
                gap:7px;
                margin-top:8px;
            "
        >

            <a
                class="outline-btn"
                style="
                    flex:1;
                    text-align:center;
                    font-size:11px;
                    padding:8px;
                "
                href="tel:${provider.phone}"
            >
                ☎ Call
            </a>


            <a
                class="outline-btn"
                style="
                    flex:1;
                    text-align:center;
                    font-size:11px;
                    padding:8px;
                "
                target="_blank"
                href="https://wa.me/${provider.whatsapp}?text=Hi%20${encodeURIComponent(provider.name)},%20I%20found%20you%20on%20ServiFind."
            >
                WhatsApp
            </a>


            <button
                class="outline-btn"
                style="
                    flex:1;
                    font-size:11px;
                    padding:8px;
                "
                data-action="map"
                data-id="${provider.id}"
            >
                Map
            </button>

        </div>


    </article>

    `;

}


/* ================= PROVIDER FILTER ================= */

function renderProviders() {

    const search =
        state.search
            .trim()
            .toLowerCase();


    const service =
        $("serviceFilter").value;


    const rating =
        Number(
            $("ratingFilter").value
        );


    const price =
        Number(
            $("priceFilter").value
        );


    const distance =
        Number(
            $("distanceFilter").value
        );


    const selectedState =
        $("stateSelect")
            .value
            .toLowerCase();


    const list =
        providers.filter(
            provider => {

                const searchableText = `

                    ${provider.name}

                    ${provider.service}

                    ${provider.category}

                    ${provider.city}

                    ${provider.area}

                    ${provider.state}

                `.toLowerCase();


                return (

                    !search ||
                    searchableText
                        .includes(search)

                )

                &&

                (

                    !service ||
                    provider.service === service

                )

                &&

                provider.rating >= rating

                &&

                (

                    !price ||
                    provider.price <= price

                )

                &&

                provider.distance <= distance

                &&

                (

                    !selectedState ||
                    provider.state
                        .toLowerCase() ===
                    selectedState

                );

            }

        );


    $("resultSummary")
        .textContent =

        `${list.length} provider${
            list.length === 1
                ? ""
                : "s"
        } found`;


    $("providerGrid").innerHTML =

        list.length

            ? list
                .map(providerCard)
                .join("")

            :

            `

            <div
                class="empty"
                style="
                    grid-column:1/-1;
                    padding:40px 0;
                "
            >

                No providers match your filters.

                Try another service,
                state, price or distance.

            </div>

            `;


    document
        .querySelectorAll(
            "[data-action]"
        )
        .forEach(button => {

            button.onclick =
                handleProviderAction;

        });

}


/* ================= PROVIDER ACTIONS ================= */

function handleProviderAction(event) {

    const id =
        Number(
            event.currentTarget
                .dataset.id
        );


    const action =
        event.currentTarget
            .dataset.action;


    const provider =
        getProvider(id);


    if (!provider) {
        return;
    }


    /* FAVORITE */

    if (action === "fav") {

        if (
            state.favourites
                .includes(id)
        ) {

            state.favourites =
                state.favourites
                    .filter(
                        item =>
                            item !== id
                    );

            toast(
                "Removed from favourites"
            );

        } else {

            state.favourites
                .push(id);

            toast(
                "Added to favourites"
            );

        }


        save();

        renderProviders();

        renderFavourites();

    }


    /* BOOK */

    if (action === "book") {

        openBooking(provider);

    }


    /* MESSAGE */

    if (action === "message") {

        openMessage(provider);

    }


    /* REVIEW */

    if (action === "review") {

        openReview(provider);

    }


    /* MAP */

    if (action === "map") {

        openProviderMap(provider);

    }

}


/* ================= BOOKING ================= */

function openBooking(provider) {

    $("bookingProviderId").value =
        provider.id;


    $("bookingProviderName")
        .textContent =
        `Book ${provider.name}`;


    $("bookingDate").min =
        new Date()
            .toISOString()
            .split("T")[0];


    $("bookingModal");


    $("providerModal")
        .classList.remove(
            "hidden"
        );

}


$("bookingForm").onsubmit =
    function(event) {

        event.preventDefault();


        const provider =
            getProvider(
                $("bookingProviderId")
                    .value
            );


        const booking = {

            id: Date.now(),

            providerId:
                provider.id,

            provider:
                provider.name,

            date:
                $("bookingDate")
                    .value,

            time:
                $("bookingTime")
                    .value,

            address:
                $("bookingAddress")
                    .value,

            details:
                $("bookingDetails")
                    .value,

            status:
                "Pending",

            price:
                provider.price

        };


        state.bookings.push(
            booking
        );


        save();

        renderBookings();


        $("providerModal")
            .classList.add(
                "hidden"
            );


        toast(
            `Booking sent to ${provider.name}`
        );

    };


/* ================= MESSAGING ================= */

function openMessage(provider) {

    $("messageProviderName")
        .textContent =
        provider.name;


    $("messageModal")
        .dataset
        .providerId =
        provider.id;


    const messages =
        state.messages.filter(
            message =>
                message.providerId ===
                provider.id
        );


    $("messageThread").innerHTML =

        `
        <div class="provider-message">
            Hi, how can I help you?
        </div>
        `

        +

        messages
            .map(
                message =>
                    `
                    <div class="user-message">
                        ${escapeHtml(
                            message.text
                        )}
                    </div>
                    `
            )
            .join("");


    $("messageModal")
        .classList.remove(
            "hidden"
        );

}


$("messageForm").onsubmit =
    function(event) {

        event.preventDefault();


        const providerId =
            Number(
                $("messageModal")
                    .dataset
                    .providerId
            );


        const text =
            $("messageInput")
                .value
                .trim();


        if (!text) {
            return;
        }


        state.messages.push({

            providerId,

            text,

            createdAt:
                new Date()
                    .toISOString()

        });


        save();


        $("messageInput").value =
            "";


        openMessage(
            getProvider(providerId)
        );


        updateDashboard();

    };


/* ================= REVIEWS ================= */

function openReview(provider) {

    $("reviewProviderId")
        .value =
        provider.id;


    $("reviewProviderName")
        .textContent =
        `Review ${provider.name}`;


    $("reviewModal")
        .classList.remove(
            "hidden"
        );

}


$("reviewForm").onsubmit =
    function(event) {

        event.preventDefault();


        const provider =
            getProvider(
                $("reviewProviderId")
                    .value
            );


        const rating =
            $("reviewRating")
                .value;


        toast(
            `Thanks. Your ${rating}-star review for ${provider.name} was submitted.`
        );


        $("reviewModal")
            .classList.add(
                "hidden"
            );

    };


/* ================= GOOGLE MAPS ================= */

function openProviderMap(provider) {

    const query =
        encodeURIComponent(

            `${provider.area},
             ${provider.city},
             ${provider.state},
             Nigeria`

        );


    window.open(

        `https://www.google.com/maps/search/?api=1&query=${query}`,

        "_blank"

    );

}


/* ================= LOCATION ================= */

function detectLocation() {

    if (!navigator.geolocation) {

        toast(
            "Geolocation is not supported by this browser."
        );

        return;

    }


    $("locationStatus")
        .textContent =
        "Detecting your location...";


    navigator.geolocation
        .getCurrentPosition(

            position => {

                state.coords = {

                    lat:
                        position.coords.latitude,

                    lng:
                        position.coords.longitude

                };


                const coords =

                    `${position.coords.latitude.toFixed(5)},
                     ${position.coords.longitude.toFixed(5)}`;


                $("locationStatus")
                    .textContent =
                    "Location detected";


                $("locationCoords")
                    .textContent =
                    `Coordinates: ${coords}`;


                $("heroLocation")
                    .textContent =
                    `Near you · ${coords}`;


                toast(
                    "Location detected successfully"
                );

            },


            () => {

                $("locationStatus")
                    .textContent =
                    "Location access was denied";


                $("locationCoords")
                    .textContent =
                    "Enable location permission in your browser to calculate your position.";


                toast(
                    "Location permission was not granted"
                );

            },

            {

                enableHighAccuracy:
                    true,

                timeout:
                    10000

            }

        );

}


/* ================= FAVOURITES ================= */

function renderFavourites() {

    $("favCount")
        .textContent =
        state.favourites.length;


    const favourites =
        state.favourites
            .map(getProvider)
            .filter(Boolean);


    $("favouriteList").innerHTML =

        favourites.length

            ?

            favourites
                .map(
                    provider =>
                        `

                        <div class="fav-item">

                            <div>

                                <strong>
                                    ${provider.name}
                                </strong>

                                <small>
                                    ${provider.service}
                                    ·
                                    ${provider.city},
                                    ${provider.state}
                                </small>

                            </div>


                            <button
                                class="outline-btn"
                                data-fav-book="${provider.id}"
                            >
                                Book
                            </button>

                        </div>

                        `
                )
                .join("")

            :

            `
            <p class="empty">
                No favourite providers yet.
            </p>
            `;


    document
        .querySelectorAll(
            "[data-fav-book]"
        )
        .forEach(button => {

            button.onclick = () => {

                openBooking(
                    getProvider(
                        button
                            .dataset
                            .favBook
                    )
                );

            };

        });

}


/* ================= AUTH ================= */

let loginMode =
    "login";


function openLogin() {

    $("loginModal")
        .classList.remove(
            "hidden"
        );

}


$("loginBtn").onclick =
    openLogin;


$("providerLoginBtn").onclick =
    openLogin;


$("authSwitch").onclick =
    function() {

        loginMode =
            loginMode === "login"
                ? "signup"
                : "login";


        if (
            loginMode === "login"
        ) {

            $("authTitle")
                .textContent =
                "Welcome back";


            $("authSubtitle")
                .textContent =
                "Login to save favourites and manage bookings.";


            $("authSwitch")
                .textContent =
                "Create a new account";

        } else {

            $("authTitle")
                .textContent =
                "Create your account";


            $("authSubtitle")
                .textContent =
                "Create a ServiFind account with your email or phone.";


            $("authSwitch")
                .textContent =
                "I already have an account";

        }

    };


$("authForm").onsubmit =
    function(event) {

        event.preventDefault();


        state.user = {

            identifier:
                $("authIdentifier")
                    .value,

            createdAt:
                new Date()
                    .toISOString()

        };


        save();


        $("loginModal")
            .classList.add(
                "hidden"
            );


        $("loginBtn")
            .textContent =
            "Profile";


        toast(

            loginMode === "login"

                ? "Logged in successfully"

                : "Account created successfully"

        );

    };


/* ================= DASHBOARD ================= */

function renderBookings() {

    $("bookingList").innerHTML =

        state.bookings.length

            ?

            [...state.bookings]
                .reverse()
                .map(

                    booking =>
                        `

                        <div class="booking-item">

                            <div>

                                <strong>
                                    ${booking.provider}
                                </strong>

                                <div class="muted">

                                    ${booking.date}

                                    at

                                    ${booking.time}

                                    ·

                                    ${booking.address}

                                </div>

                            </div>


                            <span class="chip">
                                ${booking.status}
                            </span>

                        </div>

                        `

                )
                .join("")

            :

            `

            <p class="empty">

                No bookings yet.
                Book a provider to see bookings here.

            </p>

            `;


    updateDashboard();

}


function updateDashboard() {

    $("dashBookings")
        .textContent =
        state.bookings.length;


    $("dashMessages")
        .textContent =
        state.messages.length;


    const total =
        state.bookings.reduce(

            (sum, booking) =>
                sum + booking.price,

            0

        );


    $("dashRevenue")
        .textContent =
        money(total);

}


/* ================= THEME ================= */

function applyTheme() {

    const dark =
        localStorage.getItem(
            "servifindTheme"
        ) === "dark";


    document.documentElement
        .dataset.theme =
        dark
            ? "dark"
            : "light";


    $("themeToggle")
        .textContent =
        dark
            ? "☀"
            : "☾";

}


$("themeToggle").onclick =
    function() {

        const dark =
            document.documentElement
                .dataset
                .theme === "dark";


        localStorage.setItem(

            "servifindTheme",

            dark
                ? "light"
                : "dark"

        );


        applyTheme();

    };


/* ================= SEARCH ================= */

$("searchBtn").onclick =
    function() {

        state.search =
            $("heroSearch")
                .value;


        renderProviders();


        $("providers")
            .scrollIntoView({
                behavior: "smooth"
            });

    };


$("heroSearch")
    .addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                $("searchBtn")
                    .click();

            }

        }
    );


/* ================= FILTERS ================= */

[

    "serviceFilter",

    "ratingFilter",

    "priceFilter",

    "distanceFilter",

    "stateSelect"

].forEach(id => {

    $(id).addEventListener(
        "change",
        renderProviders
    );

});


/* ================= LOCATION BUTTONS ================= */

$("locationBtn").onclick =
    detectLocation;


$("detectHeroBtn").onclick =
    detectLocation;


/* ================= MAP BUTTON ================= */

$("mapsBtn").onclick =
    function() {

        if (state.coords) {

            window.open(

                `https://www.google.com/maps/search/?api=1&query=${state.coords.lat},${state.coords.lng}`,

                "_blank"

            );

        } else {

            window.open(
                "https://www.google.com/maps",
                "_blank"
            );

        }

    };


/* ================= FAVOURITES PANEL ================= */

$("favouriteFab").onclick =
    function() {

        $("favouritePanel")
            .classList.add(
                "open"
            );

    };


$("closeFavourites").onclick =
    function() {

        $("favouritePanel")
            .classList.remove(
                "open"
            );

    };


/* ================= CLOSE MODALS ================= */

document
    .querySelectorAll(
        "[data-close]"
    )
    .forEach(element => {

        element.onclick =
            function() {

                const target =
                    element.dataset.close;


                $(target)
                    .classList.add(
                        "hidden"
                    );

            };

    });


/* ================= VIEW ALL ================= */

$("viewAllServices").onclick =
    function() {

        $("heroSearch")
            .value = "";


        state.search = "";


        renderProviders();


        $("providers")
            .scrollIntoView({
                behavior: "smooth"
            });

    };


/* ================= HTML SECURITY ================= */

function escapeHtml(text) {

    return String(text)
        .replace(
            /[&<>"']/g,
            character => {

                return {

                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                }[character];

            }
        );

}


/* ================= INITIALIZE ================= */

applyTheme();

renderCategories();

renderProviders();

renderFavourites();

renderBookings();


if (state.user) {

    $("loginBtn")
        .textContent =
        "Profile";

}