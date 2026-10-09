import { Icon } from "@iconify/react";

export function Achievements() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="p-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<h1 className="text-lg font-bold font-heading text-primary tracking-tight">Achievements</h1>
				<button className="p-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:menu-dots-bold" className="size-6 text-foreground" />
				</button>
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section className="grid grid-cols-2 gap-3">
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
							<div className="flex items-center justify-between mb-2">
								<Icon icon="solar:cup-star-bold" className="size-8 text-chart-5" />
								<span className="text-2xl font-bold font-heading text-foreground">2,450</span>
							</div>
							<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
								Total Points
							</p>
						</div>
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
							<div className="flex items-center justify-between mb-2">
								<Icon icon="solar:fire-bold" className="size-8 text-chart-4" />
								<span className="text-2xl font-bold font-heading text-foreground">47</span>
							</div>
							<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
								Day Streak
							</p>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Badges</h2>
						<div className="space-y-3">
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
									Earned
								</p>
								<div className="grid grid-cols-3 gap-3">
									<div className="flex flex-col items-center text-center">
										<div className="bg-chart-5 p-3 rounded-full mb-2">
											<Icon icon="solar:fire-bold" className="size-8 text-white" />
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">Week Warrior</p>
										<p className="text-[10px] text-muted-foreground">7 day streak</p>
									</div>
									<div className="flex flex-col items-center text-center">
										<div className="bg-chart-4 p-3 rounded-full mb-2">
											<Icon icon="solar:medal-star-bold" className="size-8 text-white" />
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">30 Day Streak</p>
										<p className="text-[10px] text-muted-foreground">Earned 2x</p>
									</div>
									<div className="flex flex-col items-center text-center">
										<div className="bg-primary p-3 rounded-full mb-2">
											<Icon
												icon="solar:chat-square-like-bold"
												className="size-8 text-primary-foreground"
											/>
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">Discussion Starter</p>
										<p className="text-[10px] text-muted-foreground">10 discussions</p>
									</div>
									<div className="flex flex-col items-center text-center">
										<div className="bg-emerald-500 p-3 rounded-full mb-2">
											<Icon icon="solar:star-bold" className="size-8 text-white" />
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">Fine-Free Month</p>
										<p className="text-[10px] text-muted-foreground">No fines March</p>
									</div>
									<div className="flex flex-col items-center text-center">
										<div className="bg-chart-2 p-3 rounded-full mb-2">
											<Icon icon="solar:book-2-bold" className="size-8 text-white" />
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">20 Books</p>
										<p className="text-[10px] text-muted-foreground">Completed</p>
									</div>
									<div className="flex flex-col items-center text-center">
										<div className="bg-primary p-3 rounded-full mb-2">
											<Icon icon="solar:cup-star-bold" className="size-8 text-primary-foreground" />
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">Speed Reader</p>
										<p className="text-[10px] text-muted-foreground">5 books/month</p>
									</div>
								</div>
							</div>
							<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
								<p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
									Locked
								</p>
								<div className="grid grid-cols-3 gap-3">
									<div className="flex flex-col items-center text-center opacity-40">
										<div className="bg-muted p-3 rounded-full mb-2">
											<Icon
												icon="solar:shield-star-bold"
												className="size-8 text-muted-foreground"
											/>
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">50 Books</p>
										<p className="text-[10px] text-muted-foreground">24/50</p>
									</div>
									<div className="flex flex-col items-center text-center opacity-40">
										<div className="bg-muted p-3 rounded-full mb-2">
											<Icon icon="solar:fire-bold" className="size-8 text-muted-foreground" />
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">100 Day Streak</p>
										<p className="text-[10px] text-muted-foreground">47/100</p>
									</div>
									<div className="flex flex-col items-center text-center opacity-40">
										<div className="bg-muted p-3 rounded-full mb-2">
											<Icon icon="solar:crown-star-bold" className="size-8 text-muted-foreground" />
										</div>
										<p className="text-xs font-bold text-foreground mb-0.5">Top 3 Rank</p>
										<p className="text-[10px] text-muted-foreground">Reach rank 3</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="pb-4">
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Leaderboard</h2>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="flex items-center gap-3 p-4">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-5 text-white font-bold text-sm shrink-0">
									1
								</div>
								<div className="size-10 rounded-full overflow-hidden border-2 border-chart-5 shrink-0">
									<img
										alt="Top Reader"
										src="https://randomuser.me/api/portraits/women/45.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-bold text-foreground truncate">Sarah Mitchell</p>
									<p className="text-xs text-muted-foreground">3,890 pts • 62 day streak</p>
								</div>
								<Icon icon="solar:cup-star-bold" className="size-6 text-chart-5 shrink-0" />
							</div>
							<div className="flex items-center gap-3 p-4">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-3 text-white font-bold text-sm shrink-0">
									2
								</div>
								<div className="size-10 rounded-full overflow-hidden border-2 border-chart-3 shrink-0">
									<img
										alt="Top Reader"
										src="https://randomuser.me/api/portraits/men/67.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-bold text-foreground truncate">James Anderson</p>
									<p className="text-xs text-muted-foreground">3,240 pts • 45 day streak</p>
								</div>
								<Icon icon="solar:medal-star-bold" className="size-6 text-chart-3 shrink-0" />
							</div>
							<div className="flex items-center gap-3 p-4">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-4 text-white font-bold text-sm shrink-0">
									3
								</div>
								<div className="size-10 rounded-full overflow-hidden border-2 border-chart-4 shrink-0">
									<img
										alt="Top Reader"
										src="https://randomuser.me/api/portraits/women/28.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-bold text-foreground truncate">Emma Rodriguez</p>
									<p className="text-xs text-muted-foreground">2,980 pts • 51 day streak</p>
								</div>
								<Icon icon="solar:shield-star-bold" className="size-6 text-chart-4 shrink-0" />
							</div>
							<div className="flex items-center gap-3 p-4 bg-secondary/50">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
									7
								</div>
								<div className="size-10 rounded-full overflow-hidden border-2 border-primary shrink-0">
									<img
										alt="Your Profile"
										src="https://randomuser.me/api/portraits/men/32.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-bold text-foreground truncate">
										Marcus Thompson (You)
									</p>
									<p className="text-xs text-muted-foreground">2,450 pts • 47 day streak</p>
								</div>
								<Icon icon="solar:star-bold" className="size-6 text-primary shrink-0" />
							</div>
							<div className="flex items-center gap-3 p-4">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground font-bold text-sm shrink-0">
									8
								</div>
								<div className="size-10 rounded-full overflow-hidden border-2 border-border shrink-0">
									<img
										alt="Reader"
										src="https://randomuser.me/api/portraits/men/54.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-bold text-foreground truncate">David Chen</p>
									<p className="text-xs text-muted-foreground">2,310 pts • 38 day streak</p>
								</div>
							</div>
							<div className="flex items-center gap-3 p-4">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground font-bold text-sm shrink-0">
									9
								</div>
								<div className="size-10 rounded-full overflow-hidden border-2 border-border shrink-0">
									<img
										alt="Reader"
										src="https://randomuser.me/api/portraits/women/19.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-bold text-foreground truncate">Lisa Park</p>
									<p className="text-xs text-muted-foreground">2,180 pts • 29 day streak</p>
								</div>
							</div>
							<div className="flex items-center gap-3 p-4">
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground font-bold text-sm shrink-0">
									10
								</div>
								<div className="size-10 rounded-full overflow-hidden border-2 border-border shrink-0">
									<img
										alt="Reader"
										src="https://randomuser.me/api/portraits/men/41.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-bold text-foreground truncate">Alex Johnson</p>
									<p className="text-xs text-muted-foreground">2,050 pts • 33 day streak</p>
								</div>
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
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:user-bold" className="size-6" />
						<span className="text-[10px] font-medium">Profile</span>
					</button>
					<button className="flex flex-col items-center gap-1 p-2 text-primary">
						<Icon icon="solar:menu-dots-circle-bold" className="size-6" />
						<span className="text-[10px] font-medium">More</span>
					</button>
				</div>
			</nav>
		</div>
	);
}
