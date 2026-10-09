import { Icon } from "@iconify/react";

export function BookSections() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<a href="/home" className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</a>
				<h1 className="text-lg font-bold font-heading text-primary tracking-tight">
					Reading Schedule
				</h1>
				<button className="p-2 -mr-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:calendar-bold" className="size-6 text-foreground" />
				</button>
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section>
						<div className="bg-card rounded-xl p-5 shadow-sm border border-border">
							<div className="flex gap-4 mb-5">
								<div className="w-24 h-36 shrink-0 rounded-md overflow-hidden shadow-md bg-muted relative">
									<img
										alt="Book Cover"
										src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
										className="w-full h-full object-cover opacity-90"
									/>
									<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
								</div>
								<div className="flex-1">
									<h2 className="font-bold font-heading text-2xl leading-tight mb-1">
										The Disciplined Life
									</h2>
									<p className="text-sm text-muted-foreground mb-3">Richard Taylor</p>
									<div className="flex items-center gap-2 mb-2">
										<span className="inline-block px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
											30 Days
										</span>
										<span className="text-xs text-muted-foreground">Oct 1 - Oct 30</span>
									</div>
								</div>
							</div>
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-sm font-bold text-foreground">Overall Progress</span>
									<span className="text-sm font-bold text-primary">75%</span>
								</div>
								<div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
									<div className="h-full bg-primary w-3/4 rounded-full" />
								</div>
								<div className="flex items-center justify-between text-xs text-muted-foreground">
									<span>23 of 30 days completed</span>
									<span>7 days remaining</span>
								</div>
							</div>
						</div>
					</section>
					<section>
						<h3 className="text-lg font-bold font-heading text-foreground mb-3">Daily Sections</h3>
						<div className="flex items-center gap-2 mb-3">
							<button className="flex-1 py-2 px-3 bg-primary text-primary-foreground text-xs font-bold rounded-lg">
								All Sections
							</button>
							<button className="flex-1 py-2 px-3 bg-secondary text-secondary-foreground text-xs font-bold rounded-lg">
								Completed
							</button>
							<button className="flex-1 py-2 px-3 bg-secondary text-secondary-foreground text-xs font-bold rounded-lg">
								Pending
							</button>
						</div>
						<div className="space-y-3">
							<a
								href="/book-details?day=23"
								className="bg-card rounded-xl p-4 shadow-sm border border-border block"
							>
								<div className="flex items-start gap-3">
									<div className="flex items-center justify-center size-10 shrink-0 rounded-full bg-emerald-50 border border-emerald-200">
										<Icon icon="solar:check-circle-bold" className="size-6 text-emerald-600" />
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-start justify-between gap-2 mb-2">
											<div>
												<h4 className="text-sm font-bold text-foreground">Day 23</h4>
												<p className="text-xs text-muted-foreground">Oct 23, Monday</p>
											</div>
											<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md whitespace-nowrap">
												Completed
											</span>
										</div>
										<div className="space-y-1">
											<p className="text-sm font-medium text-foreground">
												Chapter 4: Active Waiting
											</p>
											<div className="flex items-center gap-3 text-xs text-muted-foreground">
												<span>Pages 78-92</span>
												<span>•</span>
												<span>15 min read</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a
								href="/book-details?day=24"
								className="bg-primary/5 rounded-xl p-4 shadow-sm border-2 border-primary block"
							>
								<div className="flex items-start gap-3 mb-4">
									<div className="flex items-center justify-center size-10 shrink-0 rounded-full bg-primary text-primary-foreground">
										<span className="text-sm font-bold">24</span>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-start justify-between gap-2 mb-2">
											<div>
												<h4 className="text-sm font-bold text-foreground">Day 24</h4>
												<p className="text-xs text-muted-foreground">Oct 24, Tuesday</p>
											</div>
											<span className="text-[10px] font-bold text-primary bg-white px-2 py-1 rounded-md whitespace-nowrap">
												Today
											</span>
										</div>
										<div className="space-y-1">
											<p className="text-sm font-medium text-foreground">
												Chapter 5: Building Momentum
											</p>
											<div className="flex items-center gap-3 text-xs text-muted-foreground">
												<span>Pages 93-108</span>
												<span>•</span>
												<span>18 min read</span>
											</div>
										</div>
									</div>
								</div>
								<button className="w-full py-3 bg-primary text-primary-foreground text-sm font-bold rounded-lg shadow-sm active:scale-[0.98] transition-transform">
									Mark as Complete
								</button>
							</a>
							<a
								href="/book-details?day=25"
								className="bg-card rounded-xl p-4 shadow-sm border border-border opacity-75 block"
							>
								<div className="flex items-start gap-3">
									<div className="flex items-center justify-center size-10 shrink-0 rounded-full bg-secondary border border-border">
										<span className="text-sm font-bold text-muted-foreground">25</span>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-start justify-between gap-2 mb-2">
											<div>
												<h4 className="text-sm font-bold text-foreground">Day 25</h4>
												<p className="text-xs text-muted-foreground">Oct 25, Wednesday</p>
											</div>
											<span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md whitespace-nowrap">
												Upcoming
											</span>
										</div>
										<div className="space-y-1">
											<p className="text-sm font-medium text-foreground">
												Chapter 5-6: Transitions
											</p>
											<div className="flex items-center gap-3 text-xs text-muted-foreground">
												<span>Pages 109-125</span>
												<span>•</span>
												<span>20 min read</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a
								href="/book-details?day=26"
								className="bg-card rounded-xl p-4 shadow-sm border border-border opacity-75 block"
							>
								<div className="flex items-start gap-3">
									<div className="flex items-center justify-center size-10 shrink-0 rounded-full bg-secondary border border-border">
										<span className="text-sm font-bold text-muted-foreground">26</span>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-start justify-between gap-2 mb-2">
											<div>
												<h4 className="text-sm font-bold text-foreground">Day 26</h4>
												<p className="text-xs text-muted-foreground">Oct 26, Thursday</p>
											</div>
											<span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md whitespace-nowrap">
												Upcoming
											</span>
										</div>
										<div className="space-y-1">
											<p className="text-sm font-medium text-foreground">Chapter 6: Consistency</p>
											<div className="flex items-center gap-3 text-xs text-muted-foreground">
												<span>Pages 126-140</span>
												<span>•</span>
												<span>16 min read</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a
								href="/book-details?day=27"
								className="bg-card rounded-xl p-4 shadow-sm border border-border opacity-75 block"
							>
								<div className="flex items-start gap-3">
									<div className="flex items-center justify-center size-10 shrink-0 rounded-full bg-secondary border border-border">
										<span className="text-sm font-bold text-muted-foreground">27</span>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-start justify-between gap-2 mb-2">
											<div>
												<h4 className="text-sm font-bold text-foreground">Day 27</h4>
												<p className="text-xs text-muted-foreground">Oct 27, Friday</p>
											</div>
											<span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md whitespace-nowrap">
												Upcoming
											</span>
										</div>
										<div className="space-y-1">
											<p className="text-sm font-medium text-foreground">
												Chapter 7: The Power of Habit
											</p>
											<div className="flex items-center gap-3 text-xs text-muted-foreground">
												<span>Pages 141-158</span>
												<span>•</span>
												<span>19 min read</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							<a
								href="/book-details?day=28"
								className="bg-card rounded-xl p-4 shadow-sm border border-border opacity-75 block"
							>
								<div className="flex items-start gap-3">
									<div className="flex items-center justify-center size-10 shrink-0 rounded-full bg-secondary border border-border">
										<span className="text-sm font-bold text-muted-foreground">28</span>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-start justify-between gap-2 mb-2">
											<div>
												<h4 className="text-sm font-bold text-foreground">Day 28</h4>
												<p className="text-xs text-muted-foreground">Oct 28, Saturday</p>
											</div>
											<span className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md whitespace-nowrap">
												Upcoming
											</span>
										</div>
										<div className="space-y-1">
											<p className="text-sm font-medium text-foreground">
												Chapter 8: Accountability
											</p>
											<div className="flex items-center gap-3 text-xs text-muted-foreground">
												<span>Pages 159-175</span>
												<span>•</span>
												<span>17 min read</span>
											</div>
										</div>
									</div>
								</div>
							</a>
							<button className="w-full py-3 border border-border rounded-lg text-sm font-semibold text-foreground flex items-center justify-center gap-2 hover:bg-secondary/50 transition-colors">
								View All 30 Days
								<Icon icon="solar:arrow-down-linear" className="size-4" />
							</button>
						</div>
					</section>
				</div>
			</main>
			<nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-30 pb-safe">
				<div className="flex items-center justify-around px-6 py-2">
					<a
						href="/home"
						className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors"
					>
						<Icon icon="solar:home-2-bold" className="size-6" />
						<span className="text-[10px] font-medium">Home</span>
					</a>
					<a href="/books" className="flex flex-col items-center gap-1 p-2 text-primary">
						<Icon icon="solar:book-2-bold" className="size-6" />
						<span className="text-[10px] font-medium">Books</span>
					</a>
					<a
						href="/discuss"
						className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors"
					>
						<Icon icon="solar:chat-square-like-bold" className="size-6" />
						<span className="text-[10px] font-medium">Discuss</span>
					</a>
					<a
						href="/profile"
						className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors"
					>
						<Icon icon="solar:user-bold" className="size-6" />
						<span className="text-[10px] font-medium">Profile</span>
					</a>
				</div>
			</nav>
		</div>
	);
}
