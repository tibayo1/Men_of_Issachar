// ========================================
// Application State & Router
// ========================================

const app = {
    currentPage: 'onboarding',
    userData: {
        name: 'Marcus Thompson',
        username: '@marcus_reads',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        streak: 47,
        booksRead: 24,
        points: 1247
    }
};

// Router
function navigate(page) {
    app.currentPage = page;
    renderPage();
    window.scrollTo(0, 0);
}

function renderPage() {
    const appContainer = document.getElementById('app');
    
    const pages = {
        'onboarding': renderOnboarding(),
        'home': renderHome(),
        'book-details': renderBookDetails(),
        'profile': renderProfile(),
        'books': renderBooks(),
        'discuss': renderDiscuss(),
        'notifications': renderNotifications(),
        'search': renderSearch()
    };
    
    appContainer.innerHTML = pages[app.currentPage] || pages['home'];
    attachEventListeners();
}

function attachEventListeners() {
    // Navigation links
    document.querySelectorAll('[data-navigate]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(link.dataset.navigate);
        });
    });
}

// ========================================
// Onboarding Page
// ========================================

function renderOnboarding() {
    return `
        <div class="page">
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 3rem 1.25rem 1rem;">
                <div style="width: 2.75rem;"></div>
                <button class="btn-text" style="text-transform: uppercase; font-size: 0.875rem; letter-spacing: 0.05em;">Skip</button>
            </div>
            <div class="onboarding-container">
                <div class="onboarding-hero">
                    <div class="onboarding-circles">
                        <div class="circle-outer"></div>
                        <div class="circle-inner">
                            <iconify-icon icon="solar:book-2-bold" style="font-size: 8rem; color: var(--primary);"></iconify-icon>
                        </div>
                    </div>
                </div>
                <div class="onboarding-content">
                    <h1 class="onboarding-title">Welcome to Iron & Ink</h1>
                    <p class="onboarding-description">
                        Join a community of readers who hold each other accountable and grow together through shared literature.
                    </p>
                </div>
                <div class="pagination-dots">
                    <div class="dot dot-active"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <button class="btn btn-primary btn-lg" onclick="navigate('home')">Next</button>
            </div>
        </div>
    `;
}

// ========================================
// Home Page
// ========================================

function renderHome() {
    return `
        <div class="page">
            ${renderHeader()}
            <main class="main">
                <div class="container">
                    <!-- Current Reading Section -->
                    <section class="section">
                        <div class="section-header">
                            <h2 class="section-title">Current Reading</h2>
                            <button class="btn-text">View Schedule</button>
                        </div>
                        <div class="card card-book">
                            <div class="book-cover">
                                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80" alt="Book Cover">
                            </div>
                            <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; padding: 0.25rem 0;">
                                <div>
                                    <span class="badge badge-secondary" style="margin-bottom: 0.5rem;">Day 24 of 30</span>
                                    <h3 style="font-size: 1.25rem; font-weight: 700; font-family: var(--font-heading); line-height: 1.2; margin-bottom: 0.25rem;">
                                        The Disciplined Life
                                    </h3>
                                    <p class="text-sm text-muted">Richard Taylor</p>
                                </div>
                                <div class="progress-container">
                                    <div class="progress-label">
                                        <span>Chapter 4-5</span>
                                        <span>75%</span>
                                    </div>
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: 75%;"></div>
                                    </div>
                                    <button class="btn btn-primary" style="margin-top: 0.75rem; width: 100%; padding: 0.5rem;">Mark Complete</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- The Ledger Section -->
                    <section class="section">
                        <div class="section-header">
                            <h2 class="section-title">The Ledger</h2>
                            <div class="badge badge-danger" style="display: flex; align-items: center; gap: 0.25rem;">
                                <iconify-icon icon="solar:danger-triangle-bold" style="font-size: 0.75rem;"></iconify-icon>
                                <span>Pot: $45.00</span>
                            </div>
                        </div>
                        <div class="list">
                            <div class="list-item">
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div class="avatar avatar-md avatar-ring">
                                            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Marcus T.">
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold">Marcus T.</p>
                                            <p class="text-xs text-muted">8:42 AM</p>
                                        </div>
                                    </div>
                                    <div class="badge badge-success">
                                        <iconify-icon icon="solar:check-circle-bold" style="font-size: 1rem;"></iconify-icon>
                                        <span>Done</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-item">
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div class="avatar avatar-md grayscale">
                                            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="David R.">
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold">David R.</p>
                                            <p class="text-xs text-muted">Pending</p>
                                        </div>
                                    </div>
                                    <div class="badge" style="background-color: rgba(231, 229, 228, 0.5); color: var(--muted-foreground);">
                                        <iconify-icon icon="solar:clock-circle-bold" style="font-size: 1rem;"></iconify-icon>
                                        <span>Waiting</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list-item list-item-danger">
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div class="avatar avatar-md avatar-ring">
                                            <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="James L.">
                                        </div>
                                        <div>
                                            <p class="text-sm font-bold">James L.</p>
                                            <p class="text-xs text-destructive font-semibold">Missed Deadline</p>
                                        </div>
                                    </div>
                                    <div class="badge" style="background-color: white; color: var(--destructive); border: 1px solid rgba(185, 28, 28, 0.2); box-shadow: var(--shadow-sm);">
                                        <span>Fine: $5.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Discussion Section -->
                    <section class="section">
                        <div class="section-header">
                            <h2 class="section-title">Discussion</h2>
                            <button class="btn btn-icon" style="background-color: var(--secondary);">
                                <iconify-icon icon="solar:pen-new-square-bold" style="font-size: 1rem;"></iconify-icon>
                            </button>
                        </div>
                        <div class="card">
                            <div class="message">
                                <div class="avatar avatar-sm" style="margin-top: 0.25rem;">
                                    <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Samuel K.">
                                </div>
                                <div class="message-bubble">
                                    <div class="message-header">
                                        <span class="message-author">Samuel K.</span>
                                        <span class="message-time">2m ago</span>
                                    </div>
                                    <p class="message-content">
                                        The point about "active waiting" in chapter 4 really hit home. It's not just sitting around, it's preparation.
                                    </p>
                                </div>
                            </div>
                            <div class="message-replies">
                                <div class="avatar-stack">
                                    <div class="avatar avatar-sm">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User">
                                    </div>
                                    <div class="avatar avatar-sm">
                                        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User">
                                    </div>
                                </div>
                                <span class="text-xs font-semibold text-muted">2 replies</span>
                            </div>
                            <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                View all 14 messages
                                <iconify-icon icon="solar:arrow-right-linear" style="font-size: 1rem;"></iconify-icon>
                            </button>
                        </div>
                    </section>

                    <!-- Updates Section -->
                    <section class="section">
                        <h2 class="section-title mb-3">Updates</h2>
                        <div class="alert alert-info">
                            <div class="alert-icon" style="background-color: var(--primary); color: var(--primary-foreground);">
                                <iconify-icon icon="solar:calendar-bold" style="font-size: 1.25rem;"></iconify-icon>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold mb-1">Monthly Meetup Changed</h3>
                                <p class="text-xs text-muted" style="line-height: 1.6;">
                                    The location for this Saturday's meetup has been moved to The Roast Coffee House downtown. Same time (7:00 AM).
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Achievements Section -->
                    <section class="section">
                        <h2 class="section-title mb-3">Achievements</h2>
                        <div class="card" style="background: linear-gradient(135deg, #FEF3C7 0%, #FED7AA 100%); border: 1px solid #FDE68A; padding: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%); color: white; padding: 0.75rem; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); flex-shrink: 0;">
                                    <iconify-icon icon="solar:cup-star-bold" style="font-size: 1.75rem;"></iconify-icon>
                                </div>
                                <div style="flex: 1;">
                                    <h3 class="font-bold mb-1">Current Streak: 24 Days</h3>
                                    <p class="text-xs text-muted mb-2">You're on fire! Keep it up to reach 30 days.</p>
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <div class="progress-bar" style="flex: 1; background-color: rgba(255, 255, 255, 0.6);">
                                            <div class="progress-fill-gradient" style="width: 80%;"></div>
                                        </div>
                                        <span class="text-xs font-bold" style="color: #B45309;">80%</span>
                                    </div>
                                </div>
                            </div>
                            <button class="btn" style="margin-top: 0.75rem; width: 100%; padding: 0.5rem; background-color: var(--foreground); color: var(--background); border-radius: var(--radius-lg); font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                View Leaderboard
                                <iconify-icon icon="solar:arrow-right-linear" style="font-size: 1rem;"></iconify-icon>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
            ${renderBottomNav('home')}
        </div>
    `;
}

// ========================================
// Book Details Page
// ========================================

function renderBookDetails() {
    return `
        <div class="page">
            <header class="header header-simple">
                <button class="btn" onclick="navigate('home')">
                    <iconify-icon icon="solar:arrow-left-linear" style="font-size: 1.5rem;"></iconify-icon>
                </button>
                <h1 class="header-title" style="font-size: 1.125rem;">Book Details</h1>
                <button class="btn">
                    <iconify-icon icon="solar:menu-dots-bold" style="font-size: 1.5rem;"></iconify-icon>
                </button>
            </header>
            <main class="main">
                <div class="container">
                    <!-- Book Info -->
                    <section class="section">
                        <div class="card" style="padding: 1.25rem;">
                            <div style="display: flex; gap: 1rem; margin-bottom: 1.25rem;">
                                <div class="book-cover book-cover-lg">
                                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80" alt="Book Cover">
                                </div>
                                <div style="flex: 1;">
                                    <h2 class="text-2xl font-bold mb-1" style="font-family: var(--font-heading); line-height: 1.2;">The Disciplined Life</h2>
                                    <p class="text-sm text-muted mb-3">Richard Taylor</p>
                                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                                        <span class="badge badge-secondary">Active</span>
                                        <span class="badge badge-primary">Day 24 of 30</span>
                                    </div>
                                    <div class="progress-container">
                                        <div class="progress-label">
                                            <span>Overall Progress</span>
                                            <span class="text-primary">75%</span>
                                        </div>
                                        <div class="progress-bar progress-bar-lg">
                                            <div class="progress-fill" style="width: 75%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="padding-top: 1rem; border-top: 1px solid var(--border);">
                                <p class="text-sm" style="line-height: 1.6;">
                                    A comprehensive guide to building self-discipline and creating lasting habits. This book explores the psychology of willpower, practical strategies for maintaining focus, and the importance of accountability in achieving personal goals.
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- Reading Schedule -->
                    <section class="section">
                        <div class="section-header">
                            <h2 class="section-title">Reading Schedule</h2>
                            <button class="btn-text">View Full</button>
                        </div>
                        <div class="list">
                            <div class="list-item list-item-success">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <iconify-icon icon="solar:calendar-bold" style="font-size: 1.25rem; color: #10B981;"></iconify-icon>
                                        <span class="text-sm font-bold">Oct 20-24</span>
                                    </div>
                                    <div class="badge badge-success">
                                        <iconify-icon icon="solar:check-circle-bold" style="font-size: 1rem;"></iconify-icon>
                                        <span>Complete</span>
                                    </div>
                                </div>
                                <p class="text-sm font-semibold">Chapters 4-5: Active Waiting & Patience</p>
                                <p class="text-xs text-muted mt-1">Pages 78-125</p>
                            </div>
                            <div class="list-item list-item-highlight">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <iconify-icon icon="solar:calendar-bold" style="font-size: 1.25rem; color: var(--primary);"></iconify-icon>
                                        <span class="text-sm font-bold">Oct 25-29</span>
                                    </div>
                                    <div class="badge badge-primary">
                                        <iconify-icon icon="solar:clock-circle-bold" style="font-size: 1rem;"></iconify-icon>
                                        <span>Current</span>
                                    </div>
                                </div>
                                <p class="text-sm font-semibold">Chapters 6-7: Building Systems</p>
                                <p class="text-xs text-muted mt-1">Pages 126-178</p>
                            </div>
                            <div class="list-item">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <iconify-icon icon="solar:calendar-bold" style="font-size: 1.25rem; color: var(--muted-foreground);"></iconify-icon>
                                        <span class="text-sm font-bold">Oct 30-Nov 3</span>
                                    </div>
                                    <div class="badge" style="background-color: var(--secondary); color: var(--muted-foreground);">
                                        <span>Upcoming</span>
                                    </div>
                                </div>
                                <p class="text-sm font-semibold">Chapters 8-9: Long-term Thinking</p>
                                <p class="text-xs text-muted mt-1">Pages 179-234</p>
                            </div>
                        </div>
                    </section>

                    <!-- Members Progress -->
                    <section class="section">
                        <h2 class="section-title mb-3">Members Progress</h2>
                        <div class="list">
                            <div class="list-item">
                                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div class="avatar avatar-lg avatar-ring">
                                        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Marcus T.">
                                    </div>
                                    <div style="flex: 1;">
                                        <p class="text-sm font-bold">Marcus T.</p>
                                        <p class="text-xs text-muted">On track · Last read 2h ago</p>
                                    </div>
                                    <div class="badge badge-success">
                                        <iconify-icon icon="solar:check-circle-bold" style="font-size: 1rem;"></iconify-icon>
                                        <span>80%</span>
                                    </div>
                                </div>
                                <div class="progress-bar" style="height: 0.375rem;">
                                    <div class="progress-fill-success" style="width: 80%;"></div>
                                </div>
                            </div>
                            <div class="list-item">
                                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div class="avatar avatar-lg avatar-ring">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="You">
                                    </div>
                                    <div style="flex: 1;">
                                        <p class="text-sm font-bold">You</p>
                                        <p class="text-xs text-muted">On track · Last read 4h ago</p>
                                    </div>
                                    <div class="badge badge-primary">
                                        <span>75%</span>
                                    </div>
                                </div>
                                <div class="progress-bar" style="height: 0.375rem;">
                                    <div class="progress-fill" style="width: 75%;"></div>
                                </div>
                            </div>
                            <div class="list-item list-item-danger">
                                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div class="avatar avatar-lg avatar-ring">
                                        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="James L.">
                                    </div>
                                    <div style="flex: 1;">
                                        <p class="text-sm font-bold">James L.</p>
                                        <p class="text-xs text-destructive font-semibold">Behind schedule · 2 sections overdue</p>
                                    </div>
                                    <div class="badge badge-danger">
                                        <iconify-icon icon="solar:danger-triangle-bold" style="font-size: 1rem;"></iconify-icon>
                                        <span>45%</span>
                                    </div>
                                </div>
                                <div class="progress-bar" style="height: 0.375rem;">
                                    <div class="progress-fill-danger" style="width: 45%;"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Action Buttons -->
                    <div class="stats-grid" style="padding-bottom: 1rem;">
                        <button class="btn btn-primary" style="padding: 0.75rem 1rem; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <iconify-icon icon="solar:book-2-bold" style="font-size: 1.25rem;"></iconify-icon>
                            <span style="font-size: 0.875rem;">View Sections</span>
                        </button>
                        <button class="btn btn-secondary" style="padding: 0.75rem 1rem; border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <iconify-icon icon="solar:chat-square-like-bold" style="font-size: 1.25rem;"></iconify-icon>
                            <span style="font-size: 0.875rem;">Discuss Book</span>
                        </button>
                    </div>
                </div>
            </main>
            ${renderBottomNav('books')}
        </div>
    `;
}

// ========================================
// Profile Page
// ========================================

function renderProfile() {
    return `
        <div class="page">
            <header class="header header-simple">
                <button class="btn" onclick="navigate('home')">
                    <iconify-icon icon="solar:arrow-left-linear" style="font-size: 1.5rem;"></iconify-icon>
                </button>
                <h1 class="header-title" style="font-size: 1.125rem;">Member Profile</h1>
                <button class="btn">
                    <iconify-icon icon="solar:settings-bold" style="font-size: 1.5rem;"></iconify-icon>
                </button>
            </header>
            <main class="main">
                <div class="container">
                    <!-- Achievement Summary -->
                    <section class="section">
                        <div class="card-gradient" style="cursor: pointer;" onclick="navigate('achievements')">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                                <h2 class="text-lg font-bold" style="font-family: var(--font-heading);">Achievements Summary</h2>
                                <iconify-icon icon="solar:arrow-right-linear" style="font-size: 1.25rem; opacity: 0.7;"></iconify-icon>
                            </div>
                            <div class="stats-grid-3" style="margin-bottom: 1rem;">
                                <div style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border-radius: var(--radius-xl); padding: 0.75rem; text-align: center;">
                                    <div class="text-2xl font-bold mb-1" style="font-family: var(--font-heading);">1,247</div>
                                    <p style="font-size: 0.625rem; opacity: 0.8; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Total Points</p>
                                </div>
                                <div style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border-radius: var(--radius-xl); padding: 0.75rem; text-align: center;">
                                    <div class="text-2xl font-bold mb-1" style="font-family: var(--font-heading);">47</div>
                                    <p style="font-size: 0.625rem; opacity: 0.8; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Day Streak</p>
                                </div>
                                <div style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border-radius: var(--radius-xl); padding: 0.75rem; text-align: center;">
                                    <div class="text-2xl font-bold mb-1" style="font-family: var(--font-heading);">8/12</div>
                                    <p style="font-size: 0.625rem; opacity: 0.8; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Badges</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-xs mb-2" style="opacity: 0.9; font-weight: 500;">Recent Badges Earned</p>
                                <div style="display: flex; gap: 0.5rem;">
                                    <div style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(12px); border-radius: var(--radius-lg); padding: 0.5rem; display: flex; align-items: center; gap: 0.5rem; flex: 1;">
                                        <div style="background-color: var(--chart-5); padding: 0.375rem; border-radius: 9999px;">
                                            <iconify-icon icon="solar:fire-bold" style="font-size: 1.25rem; color: white;"></iconify-icon>
                                        </div>
                                        <div style="flex: 1; min-width: 0;">
                                            <p class="text-xs font-bold" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">30 Day Streak</p>
                                            <p style="font-size: 0.625rem; opacity: 0.7;">2 days ago</p>
                                        </div>
                                    </div>
                                    <div style="background-color: rgba(255, 255, 255, 0.15); backdrop-filter: blur(12px); border-radius: var(--radius-lg); padding: 0.5rem; display: flex; align-items: center; gap: 0.5rem; flex: 1;">
                                        <div style="background-color: var(--primary-foreground); padding: 0.375rem; border-radius: 9999px;">
                                            <iconify-icon icon="solar:book-2-bold" style="font-size: 1.25rem; color: var(--primary);"></iconify-icon>
                                        </div>
                                        <div style="flex: 1; min-width: 0;">
                                            <p class="text-xs font-bold" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">20 Books</p>
                                            <p style="font-size: 0.625rem; opacity: 0.7;">1 week ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Profile Info -->
                    <section class="section text-center" style="padding: 0.5rem 0 1rem;">
                        <div class="avatar avatar-xl" style="margin: 0 auto 0.75rem;">
                            <img src="${app.userData.avatar}" alt="Profile">
                        </div>
                        <h2 class="text-2xl font-bold mb-1" style="font-family: var(--font-heading);">Marcus Thompson</h2>
                        <p class="text-sm text-muted mb-1">@marcus_reads</p>
                        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 500; color: var(--muted-foreground); margin-bottom: 1rem;">
                            <iconify-icon icon="solar:calendar-bold" style="font-size: 1rem;"></iconify-icon>
                            <span>Member since Jan 2024</span>
                        </div>
                        <button class="btn btn-primary" style="padding: 0.625rem 1.5rem;">Edit Profile</button>
                    </section>

                    <!-- Reading Stats -->
                    <section class="section">
                        <h2 class="section-title mb-3">Reading Stats</h2>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <iconify-icon icon="solar:book-2-bold" style="font-size: 2rem; color: var(--primary);"></iconify-icon>
                                    <span class="stat-value">24</span>
                                </div>
                                <p class="stat-label">Books Read</p>
                            </div>
                            <div class="stat-card">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <iconify-icon icon="solar:fire-bold" style="font-size: 2rem; color: var(--chart-5);"></iconify-icon>
                                    <span class="stat-value">47</span>
                                </div>
                                <p class="stat-label">Day Streak</p>
                            </div>
                            <div class="stat-card">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <iconify-icon icon="solar:chart-2-bold" style="font-size: 2rem; color: #10B981;"></iconify-icon>
                                    <span class="stat-value">92%</span>
                                </div>
                                <p class="stat-label">Completion Rate</p>
                            </div>
                            <div class="stat-card">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <iconify-icon icon="solar:dollar-bold" style="font-size: 2rem; color: var(--chart-4);"></iconify-icon>
                                    <span class="stat-value">$15</span>
                                </div>
                                <p class="stat-label">Total Fines</p>
                            </div>
                        </div>
                    </section>

                    <!-- Currently Reading -->
                    <section class="section">
                        <h2 class="section-title mb-3">Currently Reading</h2>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            ${[
                                { title: 'The Disciplined Life', author: 'Richard Taylor', day: '24/30', progress: 75, image: 'photo-1544947950-fa07a98d237f' },
                                { title: 'Deep Work', author: 'Cal Newport', day: '12/30', progress: 40, image: 'photo-1512820790803-83ca734da794' },
                                { title: 'Atomic Habits', author: 'James Clear', day: '3/30', progress: 10, image: 'photo-1495640452828-3df6795cf69b' }
                            ].map(book => `
                                <div class="card" style="padding: 1rem;">
                                    <div style="display: flex; gap: 0.75rem; margin-bottom: 0.75rem;">
                                        <div class="book-cover book-cover-sm">
                                            <img src="https://images.unsplash.com/${book.image}?w=400&q=80" alt="${book.title}">
                                        </div>
                                        <div style="flex: 1;">
                                            <h3 class="font-bold mb-1">${book.title}</h3>
                                            <p class="text-xs text-muted mb-2">${book.author}</p>
                                            <span class="badge badge-secondary">Day ${book.day}</span>
                                        </div>
                                    </div>
                                    <div class="progress-container">
                                        <div class="progress-label">
                                            <span>Chapter ${book.day.split('/')[0]}</span>
                                            <span>${book.progress}%</span>
                                        </div>
                                        <div class="progress-bar">
                                            <div class="progress-fill" style="width: ${book.progress}%;"></div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    <!-- Achievements -->
                    <section class="section" style="padding-bottom: 1rem;">
                        <h2 class="section-title mb-3">Achievements</h2>
                        <div class="stats-grid-3">
                            ${[
                                { icon: 'solar:fire-bold', bg: 'var(--chart-5)', title: '30 Day Streak', subtitle: 'Earned 2x' },
                                { icon: 'solar:book-2-bold', bg: 'var(--primary)', title: '20 Books', subtitle: 'Completed' },
                                { icon: 'solar:star-bold', bg: '#10B981', title: 'Perfect Month', subtitle: 'No missed days' },
                                { icon: 'solar:medal-star-bold', bg: 'var(--chart-4)', title: 'Top Reader', subtitle: 'March 2024' },
                                { icon: 'solar:cup-star-bold', bg: 'var(--chart-2)', title: 'Speed Reader', subtitle: '5 books/month' },
                                { icon: 'solar:shield-star-bold', bg: 'var(--muted)', title: '50 Books', subtitle: 'Locked', locked: true }
                            ].map(achievement => `
                                <div class="achievement-card ${achievement.locked ? 'achievement-locked' : ''}">
                                    <div class="achievement-icon" style="background-color: ${achievement.bg};">
                                        <iconify-icon icon="${achievement.icon}" style="font-size: 2rem; color: ${achievement.locked ? 'var(--muted-foreground)' : 'white'};"></iconify-icon>
                                    </div>
                                    <p class="achievement-title">${achievement.title}</p>
                                    <p class="achievement-subtitle">${achievement.subtitle}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </div>
            </main>
            ${renderBottomNav('profile')}
        </div>
    `;
}

// ========================================
// Simplified Pages
// ========================================

function renderBooks() {
    return `
        <div class="page">
            ${renderHeader('Books', true)}
            <main class="main">
                <div class="container">
                    <div style="text-align: center; padding: 4rem 1rem;">
                        <iconify-icon icon="solar:book-2-bold" style="font-size: 4rem; color: var(--muted-foreground); margin-bottom: 1rem;"></iconify-icon>
                        <h2 class="text-xl font-bold mb-2">Books Library</h2>
                        <p class="text-muted">Your reading collection will appear here.</p>
                    </div>
                </div>
            </main>
            ${renderBottomNav('books')}
        </div>
    `;
}

function renderDiscuss() {
    return `
        <div class="page">
            ${renderHeader('Discussion Board', true)}
            <main class="main">
                <div class="container">
                    <div style="text-align: center; padding: 4rem 1rem;">
                        <iconify-icon icon="solar:chat-square-like-bold" style="font-size: 4rem; color: var(--muted-foreground); margin-bottom: 1rem;"></iconify-icon>
                        <h2 class="text-xl font-bold mb-2">Discussion Board</h2>
                        <p class="text-muted">Join conversations with your reading group.</p>
                    </div>
                </div>
            </main>
            ${renderBottomNav('discuss')}
        </div>
    `;
}

function renderNotifications() {
    return `
        <div class="page">
            ${renderHeader('Notifications', true)}
            <main class="main">
                <div class="container">
                    <div style="text-align: center; padding: 4rem 1rem;">
                        <iconify-icon icon="solar:bell-bold" style="font-size: 4rem; color: var(--muted-foreground); margin-bottom: 1rem;"></iconify-icon>
                        <h2 class="text-xl font-bold mb-2">No Notifications</h2>
                        <p class="text-muted">You're all caught up!</p>
                    </div>
                </div>
            </main>
            ${renderBottomNav()}
        </div>
    `;
}

function renderSearch() {
    return `
        <div class="page">
            ${renderHeader('Search', true)}
            <main class="main">
                <div class="container">
                    <div style="text-align: center; padding: 4rem 1rem;">
                        <iconify-icon icon="solar:magnifer-linear" style="font-size: 4rem; color: var(--muted-foreground); margin-bottom: 1rem;"></iconify-icon>
                        <h2 class="text-xl font-bold mb-2">Search</h2>
                        <p class="text-muted">Find books, members, and discussions.</p>
                    </div>
                </div>
            </main>
            ${renderBottomNav()}
        </div>
    `;
}

// ========================================
// Shared Components
// ========================================

function renderHeader(title = 'Iron & Ink', simple = false) {
    if (simple) {
        return `
            <header class="header header-simple">
                <button class="btn" onclick="navigate('home')">
                    <iconify-icon icon="solar:arrow-left-linear" style="font-size: 1.5rem;"></iconify-icon>
                </button>
                <h1 class="header-title" style="font-size: 1.125rem;">${title}</h1>
                <div style="width: 2.5rem;"></div>
            </header>
        `;
    }
    
    return `
        <header class="header">
            <div>
                <h1 class="header-title">${title}</h1>
                <p class="header-subtitle">Oct 24, Tuesday</p>
            </div>
            <div class="header-actions">
                <button class="btn" onclick="navigate('search')">
                    <iconify-icon icon="solar:magnifer-linear" style="font-size: 1.5rem;"></iconify-icon>
                </button>
                <button class="btn" style="position: relative;" onclick="navigate('notifications')">
                    <iconify-icon icon="solar:bell-bold" style="font-size: 1.5rem;"></iconify-icon>
                    <span style="position: absolute; top: 0.5rem; right: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: var(--destructive); border-radius: 9999px; border: 2px solid var(--background);"></span>
                </button>
                <button class="btn" onclick="navigate('profile')">
                    <div class="avatar" style="width: 2.5rem; height: 2.5rem; border: 1px solid var(--border);">
                        <img src="${app.userData.avatar}" alt="Profile">
                    </div>
                </button>
            </div>
        </header>
    `;
}

function renderBottomNav(active = '') {
    const navItems = [
        { id: 'home', icon: 'solar:home-2-bold', label: 'Home' },
        { id: 'books', icon: 'solar:book-2-bold', label: 'Books' },
        { id: 'discuss', icon: 'solar:chat-square-like-bold', label: 'Discuss' },
        { id: 'profile', icon: 'solar:user-bold', label: 'Profile' },
        { id: 'more', icon: 'solar:menu-dots-circle-bold', label: 'More' }
    ];
    
    return `
        <nav class="bottom-nav">
            <div class="bottom-nav-container">
                ${navItems.map(item => `
                    <a href="#${item.id}" class="nav-item ${active === item.id ? 'nav-item-active' : ''}" data-navigate="${item.id}">
                        <iconify-icon icon="${item.icon}" style="font-size: 1.5rem;"></iconify-icon>
                        <span class="nav-label">${item.label}</span>
                    </a>
                `).join('')}
            </div>
        </nav>
    `;
}

// ========================================
// Initialize Application
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Check URL hash for initial page
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'books', 'discuss', 'profile', 'notifications', 'search', 'book-details'].includes(hash)) {
        app.currentPage = hash;
    }
    
    renderPage();
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').classList.remove('active');
    }, 300);
    
    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.substring(1);
        if (newHash) {
            app.currentPage = newHash;
            renderPage();
        }
    });
});
