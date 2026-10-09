import { Icon } from "@iconify/react";

export function Profile() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="p-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<h1 className="text-lg font-bold font-heading text-primary tracking-tight">
					Member Profile
				</h1>
				<button className="p-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:settings-bold" className="size-6 text-foreground" />
				</button>
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section className="bg-gradient-to-br from-primary to-chart-2 rounded-2xl p-5 shadow-lg active:scale-[0.98] transition-transform">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-lg font-bold font-heading text-primary-foreground">
								Achievements Summary
							</h2>
							<Icon icon="solar:arrow-right-linear" className="size-5 text-primary-foreground/70" />
						</div>
						<div className="grid grid-cols-3 gap-3 mb-4">
							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
								<div className="text-2xl font-bold font-heading text-primary-foreground mb-1">
									1,247
								</div>
								<p className="text-[10px] text-primary-foreground/80 font-medium uppercase tracking-wide">
									Total Points
								</p>
							</div>
							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
								<div className="text-2xl font-bold font-heading text-primary-foreground mb-1">
									47
								</div>
								<p className="text-[10px] text-primary-foreground/80 font-medium uppercase tracking-wide">
									Day Streak
								</p>
							</div>
							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
								<div className="text-2xl font-bold font-heading text-primary-foreground mb-1">
									8/12
								</div>
								<p className="text-[10px] text-primary-foreground/80 font-medium uppercase tracking-wide">
									Badges
								</p>
							</div>
						</div>
						<div className="space-y-2">
							<p className="text-xs text-primary-foreground/90 font-medium mb-2">
								Recent Badges Earned
							</p>
							<div className="flex gap-2">
								<div className="bg-white/15 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2 flex-1">
									<div className="bg-chart-5 p-1.5 rounded-full">
										<Icon icon="solar:fire-bold" className="size-5 text-white" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-xs font-bold text-primary-foreground truncate">
											30 Day Streak
										</p>
										<p className="text-[10px] text-primary-foreground/70">2 days ago</p>
									</div>
								</div>
								<div className="bg-white/15 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2 flex-1">
									<div className="bg-primary p-1.5 rounded-full">
										<Icon icon="solar:book-2-bold" className="size-5 text-primary-foreground" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-xs font-bold text-primary-foreground truncate">20 Books</p>
										<p className="text-[10px] text-primary-foreground/70">1 week ago</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="flex flex-col items-center text-center pt-2 pb-4">
						<div className="size-24 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-3">
							<img
								alt="User Profile"
								src="https://randomuser.me/api/portraits/men/32.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<h2 className="text-2xl font-bold font-heading text-foreground mb-1">
							Marcus Thompson
						</h2>
						<p className="text-sm text-muted-foreground mb-1">@marcus_reads</p>
						<div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
							<Icon icon="solar:calendar-bold" className="size-4" />
							<span>Member since Jan 2024</span>
						</div>
						<button className="mt-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-lg shadow-sm active:scale-[0.98] transition-transform">
							Edit Profile
						</button>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Reading Stats</h2>
						<div className="grid grid-cols-2 gap-3">
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<div className="flex items-center justify-between mb-2">
									<Icon icon="solar:book-2-bold" className="size-8 text-primary" />
									<span className="text-2xl font-bold font-heading text-foreground">24</span>
								</div>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
									Books Read
								</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<div className="flex items-center justify-between mb-2">
									<Icon icon="solar:fire-bold" className="size-8 text-chart-5" />
									<span className="text-2xl font-bold font-heading text-foreground">47</span>
								</div>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
									Day Streak
								</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<div className="flex items-center justify-between mb-2">
									<Icon icon="solar:chart-2-bold" className="size-8 text-emerald-600" />
									<span className="text-2xl font-bold font-heading text-foreground">92%</span>
								</div>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
									Completion Rate
								</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<div className="flex items-center justify-between mb-2">
									<Icon icon="solar:dollar-bold" className="size-8 text-chart-4" />
									<span className="text-2xl font-bold font-heading text-foreground">$15</span>
								</div>
								<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
									Total Fines
								</p>
							</div>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">
							Currently Reading
						</h2>
						<div className="space-y-3">
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<div className="flex gap-3 mb-3">
									<div className="w-16 h-24 shrink-0 rounded-md overflow-hidden shadow-md bg-muted relative">
										<img
											alt="Book Cover"
											src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
											className="w-full h-full object-cover opacity-90"
										/>
										<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-base leading-tight mb-0.5">
											The Disciplined Life
										</h3>
										<p className="text-xs text-muted-foreground mb-2">Richard Taylor</p>
										<div className="flex items-center gap-2 text-xs">
											<span className="px-2 py-0.5 bg-secondary text-secondary-foreground font-bold rounded-sm">
												Day 24/30
											</span>
										</div>
									</div>
								</div>
								<div className="space-y-1.5">
									<div className="flex justify-between text-xs font-medium">
										<span>Chapter 4-5</span>
										<span>75%</span>
									</div>
									<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "75%" }} className="h-full bg-primary rounded-full" />
									</div>
								</div>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<div className="flex gap-3 mb-3">
									<div className="w-16 h-24 shrink-0 rounded-md overflow-hidden shadow-md bg-muted relative">
										<img
											alt="Book Cover"
											src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
											className="w-full h-full object-cover opacity-90"
										/>
										<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-base leading-tight mb-0.5">Deep Work</h3>
										<p className="text-xs text-muted-foreground mb-2">Cal Newport</p>
										<div className="flex items-center gap-2 text-xs">
											<span className="px-2 py-0.5 bg-secondary text-secondary-foreground font-bold rounded-sm">
												Day 12/30
											</span>
										</div>
									</div>
								</div>
								<div className="space-y-1.5">
									<div className="flex justify-between text-xs font-medium">
										<span>Chapter 2-3</span>
										<span>40%</span>
									</div>
									<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "40%" }} className="h-full bg-primary rounded-full" />
									</div>
								</div>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<div className="flex gap-3 mb-3">
									<div className="w-16 h-24 shrink-0 rounded-md overflow-hidden shadow-md bg-muted relative">
										<img
											alt="Book Cover"
											src="https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=400&q=80"
											className="w-full h-full object-cover opacity-90"
										/>
										<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-base leading-tight mb-0.5">Atomic Habits</h3>
										<p className="text-xs text-muted-foreground mb-2">James Clear</p>
										<div className="flex items-center gap-2 text-xs">
											<span className="px-2 py-0.5 bg-secondary text-secondary-foreground font-bold rounded-sm">
												Day 3/30
											</span>
										</div>
									</div>
								</div>
								<div className="space-y-1.5">
									<div className="flex justify-between text-xs font-medium">
										<span>Chapter 1</span>
										<span>10%</span>
									</div>
									<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "10%" }} className="h-full bg-primary rounded-full" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Reading Goals</h2>
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border space-y-4">
							<div>
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Icon icon="solar:book-2-bold" className="size-5 text-primary" />
										<span className="text-sm font-bold">Annual Goal</span>
									</div>
									<span className="text-sm font-bold text-foreground">24/50</span>
								</div>
								<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
									<div style={{ width: "48%" }} className="h-full bg-primary rounded-full" />
								</div>
							</div>
							<div>
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Icon icon="solar:calendar-bold" className="size-5 text-primary" />
										<span className="text-sm font-bold">Monthly Goal</span>
									</div>
									<span className="text-sm font-bold text-foreground">4/5</span>
								</div>
								<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
									<div style={{ width: "80%" }} className="h-full bg-primary rounded-full" />
								</div>
							</div>
							<div>
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Icon icon="solar:fire-bold" className="size-5 text-chart-5" />
										<span className="text-sm font-bold">Maintain Streak</span>
									</div>
									<span className="text-sm font-bold text-foreground">47 days</span>
								</div>
								<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
									<div style={{ width: "100%" }} className="h-full bg-chart-5 rounded-full" />
								</div>
							</div>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">
							Accountability Stats
						</h2>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<div className="bg-emerald-50 p-2 rounded-lg">
										<Icon icon="solar:check-circle-bold" className="size-6 text-emerald-600" />
									</div>
									<div>
										<p className="text-sm font-bold text-foreground">Completed on Time</p>
										<p className="text-xs text-muted-foreground">Last 30 days</p>
									</div>
								</div>
								<span className="text-2xl font-bold font-heading text-foreground">22</span>
							</div>
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<div className="bg-destructive/10 p-2 rounded-lg">
										<Icon icon="solar:close-circle-bold" className="size-6 text-destructive" />
									</div>
									<div>
										<p className="text-sm font-bold text-foreground">Missed Deadlines</p>
										<p className="text-xs text-muted-foreground">Last 30 days</p>
									</div>
								</div>
								<span className="text-2xl font-bold font-heading text-destructive">3</span>
							</div>
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<div className="bg-secondary p-2 rounded-lg">
										<Icon icon="solar:dollar-bold" className="size-6 text-foreground" />
									</div>
									<div>
										<p className="text-sm font-bold text-foreground">Fines Paid</p>
										<p className="text-xs text-muted-foreground">Total</p>
									</div>
								</div>
								<span className="text-2xl font-bold font-heading text-destructive">$15.00</span>
							</div>
							<div className="flex items-center justify-between p-4 bg-emerald-50/50">
								<div className="flex items-center gap-3">
									<div className="bg-emerald-500 p-2 rounded-lg">
										<Icon icon="solar:dollar-bold" className="size-6 text-white" />
									</div>
									<div>
										<p className="text-sm font-bold text-foreground">Fines Received</p>
										<p className="text-xs text-muted-foreground">From others</p>
									</div>
								</div>
								<span className="text-2xl font-bold font-heading text-emerald-600">$35.00</span>
							</div>
						</div>
					</section>
					<section className="pb-4">
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Achievements</h2>
						<div className="grid grid-cols-3 gap-3">
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center">
								<div className="bg-chart-5 p-3 rounded-full mb-2">
									<Icon icon="solar:fire-bold" className="size-8 text-white" />
								</div>
								<p className="text-xs font-bold text-foreground mb-0.5">30 Day Streak</p>
								<p className="text-[10px] text-muted-foreground">Earned 2x</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center">
								<div className="bg-primary p-3 rounded-full mb-2">
									<Icon icon="solar:book-2-bold" className="size-8 text-primary-foreground" />
								</div>
								<p className="text-xs font-bold text-foreground mb-0.5">20 Books</p>
								<p className="text-[10px] text-muted-foreground">Completed</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center">
								<div className="bg-emerald-500 p-3 rounded-full mb-2">
									<Icon icon="solar:star-bold" className="size-8 text-white" />
								</div>
								<p className="text-xs font-bold text-foreground mb-0.5">Perfect Month</p>
								<p className="text-[10px] text-muted-foreground">No missed days</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center">
								<div className="bg-chart-4 p-3 rounded-full mb-2">
									<Icon icon="solar:medal-star-bold" className="size-8 text-white" />
								</div>
								<p className="text-xs font-bold text-foreground mb-0.5">Top Reader</p>
								<p className="text-[10px] text-muted-foreground">March 2024</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center">
								<div className="bg-chart-2 p-3 rounded-full mb-2">
									<Icon icon="solar:cup-star-bold" className="size-8 text-white" />
								</div>
								<p className="text-xs font-bold text-foreground mb-0.5">Speed Reader</p>
								<p className="text-[10px] text-muted-foreground">5 books/month</p>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center opacity-40">
								<div className="bg-muted p-3 rounded-full mb-2">
									<Icon icon="solar:shield-star-bold" className="size-8 text-muted-foreground" />
								</div>
								<p className="text-xs font-bold text-foreground mb-0.5">50 Books</p>
								<p className="text-[10px] text-muted-foreground">Locked</p>
							</div>
						</div>
					</section>
				</div>
			</main>
			<nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-30 pb-safe">
				<div className="flex items-center justify-between px-6 py-2">
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:home-2-bold" className="size-6" />
						<span className="text-[10px] font-medium">Home</span>
					</button>
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:book-2-bold" className="size-6" />
						<span className="text-[10px] font-medium">Books</span>
					</button>
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:chat-square-like-bold" className="size-6" />
						<span className="text-[10px] font-medium">Discuss</span>
					</button>
					<button className="flex flex-col items-center gap-1 p-2 text-primary">
						<Icon icon="solar:user-bold" className="size-6" />
						<span className="text-[10px] font-medium">Profile</span>
					</button>
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:menu-dots-circle-bold" className="size-6" />
						<span className="text-[10px] font-medium">More</span>
					</button>
				</div>
			</nav>
		</div>
	);
}
