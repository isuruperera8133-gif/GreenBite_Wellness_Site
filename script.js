// ============================================
// GREENBITE UNIFIED JAVASCRIPT
// All scripts for the entire website combined into a single file
// ============================================

// --- Global Data ---
const healthSlogans = [
    "Transform your life with healthy choices",
    "Wellness begins with a single step",
    "Nourish your body, feed your soul",
    "Balance is the key to wellbeing",
    "Your health journey starts today",
    "Small changes, big results",
    "Embrace a healthier, happier you",
    "Wellness is a lifestyle, not a destination"
];

const dailyHealthTips = [
    { title: "Stay Hydrated Sunday", description: "Drink at least 8 glasses of water daily to maintain proper hydration and support all bodily functions. Add lemon or cucumber for extra flavor!" },
    { title: "Mindful Monday", description: "Start your week with 5 minutes of meditation or deep breathing. This simple practice can reduce stress and improve focus throughout the day." },
    { title: "Take-a-Walk Tuesday", description: "Take a 10-minute walk during your lunch break. Even short bursts of physical activity can boost energy and improve mood." },
    { title: "Wellness Wednesday", description: "Add more colorful vegetables to your meals today. Different colored vegetables provide various nutrients your body needs for optimal health." },
    { title: "Thankful Thursday", description: "Practice gratitude by writing down three things you're thankful for. Gratitude has been shown to improve mental health and life satisfaction." },
    { title: "Fiber Friday", description: "Include fiber-rich foods like fruits, vegetables, and whole grains in your meals. Fiber supports digestive health and helps you feel fuller longer." },
    { title: "Sleep Saturday", description: "Aim for 7-9 hours of quality sleep tonight. Good sleep is essential for physical recovery, mental clarity, and overall wellness." }
];

const recipes = [
    { "id": 1, "name": "Grilled Chicken Salad", "image": "./images/Grilled Chicken Salad.jpg", "description": "A light and healthy salad with seasoned grilled chicken.", "category": "Main Course", "ingredients": ["2 boneless, skinless chicken breasts", "1 head of romaine lettuce", "1 cup cherry tomatoes, halved", "1 cucumber, sliced", "1/4 red onion, thinly sliced", "2 tbsp olive oil", "1 tbsp lemon juice", "Salt and pepper to taste"], "instructions": ["Season chicken breasts with salt, pepper, and a little olive oil.", "Grill chicken until cooked through, about 6-8 minutes per side.", "Let chicken rest, then slice it into strips.", "In a large bowl, combine lettuce, tomatoes, cucumber, and red onion.", "Drizzle with remaining olive oil and lemon juice. Toss to combine.", "Top the salad with the sliced grilled chicken and serve immediately."], "nutrition": { "calories": 350, "protein": "40g", "fat": "15g", "carbs": "10g" } },
    { "id": 2, "name": "Avocado Toast", "image": "./images/Avacado Toast.jpg", "description": "A classic, simple, and satisfying breakfast or snack.", "category": "Breakfast", "ingredients": ["2 slices of whole-grain bread", "1 ripe avocado", "1 tsp lemon juice", "Pinch of red pepper flakes", "Salt and pepper to taste"], "instructions": ["Toast the bread to your desired crispiness.", "Mash the avocado in a small bowl with a fork.", "Mix in lemon juice, salt, pepper, and red pepper flakes.", "Spread the mashed avocado evenly over the toasted bread and serve."], "nutrition": { "calories": 280, "protein": "8g", "fat": "18g", "carbs": "25g" } },
    { "id": 3, "name": "Berry Smoothie", "image": "./images/Berry Smoothie.jpg", "description": "A refreshing and nutrient-packed smoothie.", "category": "Beverages", "ingredients": ["1 cup mixed berries (frozen)", "1/2 banana", "1/2 cup Greek yogurt", "1/2 cup almond milk", "1 tsp honey (optional)"], "instructions": ["Combine all ingredients in a blender.", "Blend on high until smooth and creamy.", "Pour into a glass and enjoy immediately."], "nutrition": { "calories": 210, "protein": "12g", "fat": "5g", "carbs": "30g" } },
    { "id": 4, "name": "Lentil Soup", "image": "./images/Lentil Soup.jpg", "description": "Hearty and delicious lentil soup perfect for a cold day.", "category": "Soup", "ingredients": ["1 tbsp olive oil", "1 onion, chopped", "2 carrots, diced", "2 celery stalks, diced", "2 cloves garlic, minced", "1 cup brown lentils, rinsed", "4 cups vegetable broth", "1 can diced tomatoes", "1 bay leaf", "Salt and pepper to taste"], "instructions": ["Heat olive oil in a large pot over medium heat.", "Add onion, carrots, and celery. Cook until softened, about 5-7 minutes.", "Stir in garlic and cook for 1 minute more.", "Add lentils, vegetable broth, diced tomatoes, and bay leaf.", "Bring to a boil, then reduce heat and simmer for 30-40 minutes, or until lentils are tender.", "Remove bay leaf. Season with salt and pepper before serving."], "nutrition": { "calories": 250, "protein": "15g", "fat": "5g", "carbs": "40g" } },
    { "id": 5, "name": "Quinoa Bowl", "image": "./images/Quinoa Bowl.jpg", "description": "A vibrant and nutritious bowl with quinoa and fresh vegetables.", "category": "Main Course", "ingredients": ["1 cup quinoa, rinsed", "2 cups vegetable broth", "1/2 avocado, sliced", "1/2 cup roasted chickpeas", "1 cup chopped kale", "2 tbsp lemon tahini dressing"], "instructions": ["Combine quinoa and vegetable broth in a pot. Bring to a boil, then reduce to a simmer, cover, and cook for 15 minutes.", "Fluff the cooked quinoa with a fork and let it cool slightly.", "In a bowl, combine the cooked quinoa, kale, roasted chickpeas, and sliced avocado.", "Drizzle with lemon tahini dressing and toss gently to coat."], "nutrition": { "calories": 420, "protein": "18g", "fat": "20g", "carbs": "45g" } }
];

const workoutData = {
    "full-body": {
      "none": [
        { "name": "Jumping Jacks", "duration": 30, "reps": "3 sets" },
        { "name": "Push-ups", "duration": 45, "reps": "10-15 reps" },
        { "name": "Bodyweight Squats", "duration": 45, "reps": "15-20 reps" },
        { "name": "Plank", "duration": 60, "reps": "Hold" }
      ],
      "dumbbells": [
        { "name": "Dumbbell Squats", "duration": 60, "reps": "12-15 reps" },
        { "name": "Dumbbell Lunges", "duration": 60, "reps": "10 reps each leg" },
        { "name": "Bent-Over Rows", "duration": 60, "reps": "10-12 reps" },
        { "name": "Overhead Press", "duration": 45, "reps": "8-10 reps" }
      ]
    },
    "arms": {
      "none": [
        { "name": "Tricep Dips", "duration": 45, "reps": "10-15 reps" },
        { "name": "Plank Shoulder Taps", "duration": 45, "reps": "30-45 seconds" },
        { "name": "Arm Circles", "duration": 30, "reps": "Forward/Backward" }
      ],
      "dumbbells": [
        { "name": "Bicep Curls", "duration": 60, "reps": "10-12 reps" },
        { "name": "Hammer Curls", "duration": 60, "reps": "10-12 reps" },
        { "name": "Overhead Tricep Extension", "duration": 45, "reps": "10-15 reps" }
      ]
    },
    "legs": {
      "none": [
        { "name": "Walking Lunges", "duration": 60, "reps": "10 reps each leg" },
        { "name": "Calf Raises", "duration": 30, "reps": "20 reps" },
        { "name": "Glute Bridges", "duration": 45, "reps": "15 reps" }
      ],
      "dumbbells": [
        { "name": "Goblet Squats", "duration": 60, "reps": "10-12 reps" },
        { "name": "Romanian Deadlifts", "duration": 60, "reps": "8-10 reps" },
        { "name": "Dumbbell Step-ups", "duration": 60, "reps": "10 reps each leg" }
      ]
    },
    "core": {
      "none": [
        { "name": "Crunches", "duration": 45, "reps": "15-20 reps" },
        { "name": "Russian Twists", "duration": 45, "reps": "20 reps" },
        { "name": "Leg Raises", "duration": 60, "reps": "15-20 reps" }
      ],
      "dumbbells": [
        { "name": "Weighted Crunches", "duration": 45, "reps": "10-15 reps" },
        { "name": "Weighted Russian Twists", "duration": 45, "reps": "15-20 reps" },
        { "name": "Dumbbell Sit-ups", "duration": 60, "reps": "10-15 reps" }
      ]
    },
    "cardio": {
      "none": [
        { "name": "High Knees", "duration": 60, "reps": "Run in place" },
        { "name": "Burpees", "duration": 45, "reps": "10 reps" },
        { "name": "Mountain Climbers", "duration": 60, "reps": "30-45 seconds" }
      ],
      "dumbbells": [
        { "name": "Dumbbell Swings", "duration": 60, "reps": "15 reps" },
        { "name": "Dumbbell Burpees", "duration": 60, "reps": "8-10 reps" }
      ]
    }
};

// --- Global Utility Functions ---
function toggleMobileNav() {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    if (nav && hamburger) {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initResponsiveBehavior() {
    window.addEventListener('resize', () => {
        const nav = document.getElementById('nav');
        const hamburger = document.getElementById('hamburger');
        if (window.innerWidth > 768) {
            if (nav) nav.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });
}

function handleNavbarScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.backdropFilter = 'none';
        }
    });
}

// --- Homepage-Specific Functions ---
function initHomepage() {
    console.log('GreenBite homepage initializing...');
    displayDailyHealthTip();
    startSloganRotation();
    addLoadingAnimations();
    initScrollAnimations();
    handleNavbarScroll();
    initSmoothScrolling();
    initResponsiveBehavior();
    
    const exploreButtons = document.querySelectorAll('.explore-btn, .discover-btn');
    exploreButtons.forEach(button => {
        button.addEventListener('click', scrollToServices);
    });
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    console.log('GreenBite homepage initialized successfully!');
}

function scrollToServices() {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function startSloganRotation() {
    const sloganElement = document.getElementById('heroSlogan');
    if (!sloganElement) return;
    
    function changeSlogan() {
        sloganElement.style.opacity = '0';
        setTimeout(() => {
            currentSloganIndex = (currentSloganIndex + 1) % healthSlogans.length;
            sloganElement.textContent = healthSlogans[currentSloganIndex];
            sloganElement.style.opacity = '1';
        }, 500);
    }
    sloganInterval = setInterval(changeSlogan, 4000);
}

function displayDailyHealthTip() {
    const today = new Date();
    const dayIndex = today.getDay();
    const tip = dailyHealthTips[dayIndex];
    const titleElement = document.getElementById('tipTitle');
    const descriptionElement = document.getElementById('tipDescription');
    const dateElement = document.getElementById('tipDate');
    
    if (titleElement && descriptionElement && tip) {
        titleElement.textContent = tip.title;
        descriptionElement.textContent = tip.description;
        if (dateElement) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = today.toLocaleDateString('en-US', options);
        }
        const tipContent = document.getElementById('dailyTipContent');
        if (tipContent) {
            tipContent.classList.add('fade-in');
        }
    }
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const messageDiv = document.getElementById('newsletterMessage');
    
    if (!emailInput || !messageDiv) {
        console.error('Newsletter form elements not found');
        return;
    }
    
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage(messageDiv, 'Please enter a valid email address.', 'error');
        return;
    }
    
    try {
        let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
        if (subscribers.includes(email)) {
            showMessage(messageDiv, 'This email is already subscribed to our newsletter.', 'error');
            return;
        }
        subscribers.push(email);
        localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
        showMessage(messageDiv, 'Thank you for subscribing! Welcome to the GreenBite community.', 'success');
        emailInput.value = '';
    } catch (error) {
        console.error('Error saving newsletter subscription:', error);
        showMessage(messageDiv, 'An error occurred. Please try again.', 'error');
    }
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `newsletter-message ${type}`;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
        element.className = 'newsletter-message';
    }, 5000);
}

function initScrollAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.service-card, .hero-content, .hero-image, .daily-tip');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

function addLoadingAnimations() {
    const elements = document.querySelectorAll('.hero-content, .hero-image');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// --- Recipes Page-Specific Functions ---
function initRecipesPage() {
    console.log('GreenBite recipes page initializing...');
    displayRecipes(recipes);
    populateCategories();
    
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', filterAndSearchRecipes);
        searchInput.addEventListener('input', filterAndSearchRecipes);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndSearchRecipes);
    }
    
    const closeBtn = document.querySelector('.modal .close-btn');
    const modal = document.getElementById('recipeModal');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    console.log('GreenBite recipes page initialized successfully!');
}

function displayRecipes(recipeArray) {
    const recipeGrid = document.getElementById('recipeGrid');
    if (!recipeGrid) return;
    recipeGrid.innerHTML = '';
    if (recipeArray.length === 0) {
        recipeGrid.innerHTML = '<p class="no-results">No recipes found. Try a different search or filter.</p>';
        return;
    }
    recipeArray.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" />
            <div class="recipe-card-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(recipe));
        recipeGrid.appendChild(card);
    });
}

function populateCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    const categories = [...new Set(recipes.map(recipe => recipe.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterAndSearchRecipes() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    if (!searchInput || !categoryFilter) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    const filteredRecipes = recipes.filter(recipe => {
        const matchesName = recipe.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
        return matchesName && matchesCategory;
    });
    
    displayRecipes(filteredRecipes);
}

function openModal(recipe) {
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalRecipeContent');
    if (!modal || !modalContent) return;
    
    modal.style.display = 'block';
    modalContent.innerHTML = `
        <h2 class="modal-title">${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" class="modal-image" />
        <p class="modal-description">${recipe.description}</p>
        
        <div class="modal-section">
            <h3 class="section-title">Ingredients</h3>
            <ul class="modal-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3 class="section-title">Instructions</h3>
            <ol class="modal-list">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>

        <div class="modal-section">
            <h3 class="section-title">Nutrition Information</h3>
            <table class="nutrition-table">
                <tr>
                    <th>Calories</th>
                    <td>${recipe.nutrition.calories} kcal</td>
                </tr>
                <tr>
                    <th>Protein</th>
                    <td>${recipe.nutrition.protein}</td>
                </tr>
                <tr>
                    <th>Fat</th>
                    <td>${recipe.nutrition.fat}</td>
                </tr>
                <tr>
                    <th>Carbs</th>
                    <td>${recipe.nutrition.carbs}</td>
                </tr>
            </table>
        </div>
    `;
}

// --- Calculator Page-Specific Functions ---
function initCalculatorPage() {
    console.log('GreenBite calculator page initializing...');
    const form = document.getElementById('calculatorForm');
    const resultContent = document.getElementById('resultContent');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const age = parseFloat(document.getElementById('age').value);
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const activityLevel = document.getElementById('activity').value;

            let bmr;
            if (gender === 'male') {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }

            const activityFactors = {
                'sedentary': 1.2,
                'lightly-active': 1.375,
                'moderately-active': 1.55,
                'very-active': 1.725,
                'super-active': 1.9
            };

            const tdee = bmr * activityFactors[activityLevel];

            const carbsGrams = (tdee * 0.50) / 4;
            const proteinGrams = (tdee * 0.20) / 4;
            const fatGrams = (tdee * 0.30) / 9;

            displayResults(bmr, tdee, carbsGrams, proteinGrams, fatGrams);
        });
    }

    function displayResults(bmr, tdee, carbs, protein, fat) {
        resultContent.innerHTML = `
            <div class="result-section">
                <h4>BMR (Basal Metabolic Rate)</h4>
                <p>${Math.round(bmr)} kcal/day</p>
                <small>Calories your body burns at rest.</small>
            </div>
            <div class="result-section">
                <h4>TDEE (Total Daily Energy Expenditure)</h4>
                <p>${Math.round(tdee)} kcal/day</p>
                <small>Total calories needed per day based on activity.</small>
            </div>
            <div class="result-section">
                <h4>Macronutrient Breakdown</h4>
                <div class="macro-breakdown">
                    <div class="macro-item">
                        <span class="macro-value">${Math.round(carbs)}g</span>
                        <span class="macro-label">Carbs</span>
                    </div>
                    <div class="macro-item">
                        <span class="macro-value">${Math.round(protein)}g</span>
                        <span class="macro-label">Protein</span>
                    </div>
                    <div class="macro-item">
                        <span class="macro-value">${Math.round(fat)}g</span>
                        <span class="macro-label">Fat</span>
                    </div>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar carbs-bar" style="width: 50%;"></div>
                    <div class="progress-bar protein-bar" style="width: 20%;"></div>
                    <div class="progress-bar fat-bar" style="width: 30%;"></div>
                </div>
                <small style="display: block; text-align: center; margin-top: 10px;">Common healthy ratio: 50% Carbs, 20% Protein, 30% Fat</small>
            </div>
        `;

        const carbsBar = document.querySelector('.carbs-bar');
        const proteinBar = document.querySelector('.protein-bar');
        const fatBar = document.querySelector('.fat-bar');

        setTimeout(() => {
            carbsBar.style.width = `${50}%`;
            proteinBar.style.width = `${20}%`;
            fatBar.style.width = `${30}%`;
        }, 100);
    }
    console.log('GreenBite calculator page initialized successfully!');
}

// --- Workout Page-Specific Functions ---
function initWorkoutPage() {
    console.log('GreenBite workout page initializing...');
    const generatorForm = document.getElementById('generatorForm');
    const workoutPlanDiv = document.getElementById('workoutPlan');
    const timerContainer = document.getElementById('timerContainer');
    const nextExerciseBtn = document.getElementById('nextExerciseBtn');

    let currentWorkout = [];
    let currentExerciseIndex = 0;
    let timerInterval;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generatorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const bodyPart = document.getElementById('bodyPart').value;
        const equipment = document.getElementById('equipment').value;

        if (workoutData[bodyPart] && workoutData[bodyPart][equipment]) {
            currentWorkout = [...workoutData[bodyPart][equipment]];
            shuffleArray(currentWorkout);
            currentExerciseIndex = 0;
            displayWorkoutPlan();
        } else {
            workoutPlanDiv.innerHTML = `<p class="placeholder-text">No workouts found for this combination. Please try a different selection.</p>`;
            timerContainer.style.display = 'none';
        }
    });

    function displayWorkoutPlan() {
        workoutPlanDiv.innerHTML = `
            <h3>Your custom workout plan:</h3>
            <ul class="workout-list">
                ${currentWorkout.map(exercise => `
                    <li class="workout-item">
                        <h3>${exercise.name}</h3>
                        <p><strong>Duration:</strong> ${exercise.duration} seconds</p>
                        <p><strong>Reps/Notes:</strong> ${exercise.reps}</p>
                    </li>
                `).join('')}
            </ul>
            <button class="generate-btn" id="startWorkoutBtn">Start Workout</button>
        `;
        document.getElementById('startWorkoutBtn').addEventListener('click', startWorkoutTimer);
        timerContainer.style.display = 'none';
    }

    function startWorkoutTimer() {
        workoutPlanDiv.style.display = 'none';
        timerContainer.style.display = 'block';
        currentExerciseIndex = 0;
        runExercise();
    }

    function runExercise() {
        if (currentExerciseIndex < currentWorkout.length) {
            const exercise = currentWorkout[currentExerciseIndex];
            let timeLeft = exercise.duration;
            document.getElementById('timerExerciseName').textContent = exercise.name;
            document.getElementById('timerReps').textContent = `Reps/Notes: ${exercise.reps}`;
            document.getElementById('timerCountdown').textContent = formatTime(timeLeft);
            updateTimerDisplay(timeLeft, exercise.duration);

            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById('timerCountdown').textContent = formatTime(timeLeft);
                updateTimerDisplay(timeLeft, exercise.duration);

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    playCompletionSound();
                    if (currentExerciseIndex < currentWorkout.length - 1) {
                        nextExerciseBtn.style.display = 'block';
                    } else {
                        nextExerciseBtn.textContent = 'Workout Complete!';
                        nextExerciseBtn.disabled = true;
                    }
                }
            }, 1000);
            nextExerciseBtn.style.display = 'none';
        } else {
            workoutComplete();
        }
    }

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }

    function updateTimerDisplay(timeLeft, totalTime) {
        const percent = ((totalTime - timeLeft) / totalTime) * 100;
        const pie = document.querySelector('.timer-pie');
        const pieFill = document.querySelector('.timer-pie-fill');

        if (percent <= 50) {
            pieFill.style.display = 'none';
            pie.style.transform = `rotate(${percent * 3.6}deg)`;
        } else {
            pieFill.style.display = 'block';
            pie.style.transform = `rotate(180deg)`;
            pieFill.style.transform = `rotate(${ (percent - 50) * 3.6}deg)`;
        }
    }

    nextExerciseBtn.addEventListener('click', () => {
        currentExerciseIndex++;
        runExercise();
    });

    function playCompletionSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = 440;
        gainNode.gain.setValueAtTime(1, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);
        oscillator.stop(audioContext.currentTime + 1);
    }

    function workoutComplete() {
        workoutPlanDiv.style.display = 'block';
        timerContainer.style.display = 'none';
        workoutPlanDiv.innerHTML = `
            <h3 style="color: #a766c6; text-align: center;">Workout Complete!</h3>
            <p style="text-align: center;">Congratulations on finishing your workout!</p>
            <button class="generate-btn" onclick="location.reload()">Generate a New Workout</button>
        `;
    }
    console.log('GreenBite workout page initialized successfully!');
}

// --- Mindfulness Page-Specific Functions ---
function initMindfulnessPage() {
    console.log('GreenBite mindfulness page initializing...');
    const breathingCircle = document.getElementById('breathing-circle');
    const breathingText = document.getElementById('breathing-text');
    const startBreathingBtn = document.getElementById('startBreathing');
    const stopBreathingBtn = document.getElementById('stopBreathing');
    let breathingInterval;

    const startBreathing = () => {
        let stage = 'inhale';
        breathingCircle.classList.remove('breathe-out', 'breathe-hold');
        breathingCircle.classList.add('breathe-in');
        breathingText.textContent = 'Inhale';
        breathingInterval = setInterval(() => {
            if (stage === 'inhale') {
                breathingText.textContent = 'Hold';
                breathingCircle.classList.remove('breathe-in');
                breathingCircle.classList.add('breathe-hold');
                setTimeout(() => {
                    breathingText.textContent = 'Exhale';
                    breathingCircle.classList.remove('breathe-hold');
                    breathingCircle.classList.add('breathe-out');
                    stage = 'exhale';
                }, 4000);
            } else if (stage === 'exhale') {
                breathingText.textContent = 'Inhale';
                breathingCircle.classList.remove('breathe-out');
                breathingCircle.classList.add('breathe-in');
                stage = 'inhale';
            }
        }, 8000);
    };

    const stopBreathing = () => {
        clearInterval(breathingInterval);
        breathingCircle.classList.remove('breathe-in', 'breathe-out', 'breathe-hold');
        breathingText.textContent = 'Ready';
    };

    startBreathingBtn.addEventListener('click', startBreathing);
    stopBreathingBtn.addEventListener('click', stopBreathing);

    const timerMinutesEl = document.getElementById('timer-minutes');
    const timerSecondsEl = document.getElementById('timer-seconds');
    const timerOptionsEl = document.getElementById('timer-options');
    const startTimerBtn = document.getElementById('startTimer');
    const pauseTimerBtn = document.getElementById('pauseTimer');
    const resetTimerBtn = document.getElementById('resetTimer');
    const sessionCountEl = document.getElementById('session-count');

    let totalSeconds = parseInt(timerOptionsEl.value);
    let timerInterval;

    const updateTimerDisplay = () => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timerMinutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
        timerSecondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
    };

    const startTimer = () => {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                totalSeconds--;
                if (totalSeconds < 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    const currentCount = parseInt(localStorage.getItem('mindfulSessions')) || 0;
                    localStorage.setItem('mindfulSessions', currentCount + 1);
                    updateSessionCount();
                } else {
                    updateTimerDisplay();
                }
            }, 1000);
        }
    };

    const pauseTimer = () => {
        clearInterval(timerInterval);
        timerInterval = null;
    };

    const resetTimer = () => {
        pauseTimer();
        totalSeconds = parseInt(timerOptionsEl.value);
        updateTimerDisplay();
    };

    const updateSessionCount = () => {
        const count = localStorage.getItem('mindfulSessions') || 0;
        sessionCountEl.textContent = count;
    };

    startTimerBtn.addEventListener('click', startTimer);
    pauseTimerBtn.addEventListener('click', pauseTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    timerOptionsEl.addEventListener('change', resetTimer);

    updateSessionCount();

    const toggleSoundBtn = document.getElementById('toggleSound');
    const soundIcon = document.getElementById('sound-icon');
    const ambientSound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3');
    ambientSound.loop = true;

    toggleSoundBtn.addEventListener('click', () => {
        if (ambientSound.paused) {
            ambientSound.play();
            soundIcon.textContent = '🔊';
        } else {
            ambientSound.pause();
            soundIcon.textContent = '🔈';
        }
    });
    console.log('GreenBite mindfulness page initialized successfully!');
}

// --- Contact Page-Specific Functions ---
function initContactPage() {
    console.log('GreenBite contact page initializing...');
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement;
            parent.classList.toggle('active');
            const panel = button.nextElementSibling;
            if (parent.classList.contains('active')) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                panel.style.maxHeight = null;
            }
        });
    });

    const feedbackForm = document.getElementById('feedback-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    function showCustomAlert(message) {
        console.log("Form submitted. " + message);
        confirmationMessage.textContent = message;
        confirmationMessage.classList.remove('hidden');
    }

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(feedbackForm);
        const feedbackData = {};
        for (let [key, value] of formData.entries()) {
            feedbackData[key] = value;
        }

        if (!feedbackData.name || !feedbackData.email || !feedbackData.subject || !feedbackData.message) {
            showCustomAlert('Please fill out all fields.');
            return;
        }

        const storedFeedback = JSON.parse(localStorage.getItem('greenbite-feedback')) || [];
        storedFeedback.push(feedbackData);
        localStorage.setItem('greenbite-feedback', JSON.stringify(storedFeedback));

        showCustomAlert('Thank you for your feedback! Your message has been submitted.');

        feedbackForm.reset();
    });
    console.log('GreenBite contact page initialized successfully!');
}

// --- Main Initialization ---
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    // Global initializations
    toggleMobileNav();
    handleNavbarScroll();
    initResponsiveBehavior();

    if (path.includes('recipes.html')) {
        initRecipesPage();
    } else if (path.includes('calculator.html')) {
        initCalculatorPage();
    } else if (path.includes('workout.html')) {
        initWorkoutPage();
    } else if (path.includes('mindfulness.html')) {
        initMindfulnessPage();
    } else if (path.includes('contact.html')) {
        initContactPage();
    } else {
        initHomepage();
    }
});

// --- Accessibility & Performance Enhancements ---
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const nav = document.getElementById('nav');
        const hamburger = document.getElementById('hamburger');
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    }
});

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    } else {
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}
document.addEventListener('DOMContentLoaded', initLazyLoading);