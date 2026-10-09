import { Icon } from "@iconify/react";

export function Home() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<div>
					<h1 className="text-2xl font-bold font-heading text-primary tracking-tight">
						Iron & Ink
					</h1>
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-0.5">
						Oct 24, Tuesday
					</p>
				</div>
				<div className="flex gap-3">
					<button
						eid="search-btn"
						className="p-2 rounded-full hover:bg-secondary transition-colors"
					>
						<Icon icon="solar:magnifer-linear" className="size-6 text-foreground" />
					</button>
					<button className="p-2 rounded-full hover:bg-secondary transition-colors relative">
						<Icon icon="solar:bell-bold" className="size-6 text-foreground" />
						<span className="absolute top-2 right-2 size-2 bg-destructive rounded-full ring-2 ring-background" />
					</button>
					<button className="size-10 rounded-full overflow-hidden border border-border">
						<img
							alt="User Profile"
							src="https://randomuser.me/api/portraits/men/32.jpg"
							className="w-full h-full object-cover"
						/>
					</button>
				</div>
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-lg font-bold font-heading text-foreground">Current Reading</h2>
							<button className="text-xs font-bold text-primary underline underline-offset-2">
								View Schedule
							</button>
						</div>
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border flex gap-4">
							<div className="w-24 h-36 shrink-0 rounded-md overflow-hidden shadow-md bg-muted relative">
								<img
									alt="Book Cover"
									src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
									className="w-full h-full object-cover opacity-90"
								/>
								<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
							</div>
							<div className="flex-1 flex flex-col justify-between py-1">
								<div>
									<span className="inline-block px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm mb-2">
										Day 24 of 30
									</span>
									<h3 className="font-bold font-heading text-xl leading-tight mb-1">
										The Disciplined Life
									</h3>
									<p className="text-sm text-muted-foreground">Richard Taylor</p>
								</div>
								<div className="space-y-3">
									<div className="space-y-1.5">
										<div className="flex justify-between text-xs font-medium">
											<span>Chapter 4-5</span>
											<span>75%</span>
										</div>
										<div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
											<div className="h-full bg-primary w-3/4 rounded-full" />
										</div>
									</div>
									<button className="w-full py-2 bg-primary text-primary-foreground text-sm font-bold rounded-lg shadow-sm active:scale-[0.98] transition-transform">
										Mark Complete
									</button>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-lg font-bold font-heading text-foreground">The Ledger</h2>
							<div className="flex items-center gap-1 text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-md">
								<Icon icon="solar:danger-triangle-bold" className="size-3" />
								<span>Pot: $45.00</span>
							</div>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="flex items-center justify-between p-3">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-full overflow-hidden relative">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/44.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div>
										<p className="text-sm font-bold text-foreground">Marcus T.</p>
										<p className="text-xs text-muted-foreground">8:42 AM</p>
									</div>
								</div>
								<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
									<Icon icon="solar:check-circle-bold" className="size-4" />
									<span className="text-xs font-bold">Done</span>
								</div>
							</div>
							<div className="flex items-center justify-between p-3">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-full overflow-hidden relative grayscale">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/86.jpg"
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<p className="text-sm font-bold text-foreground">David R.</p>
										<p className="text-xs text-muted-foreground">Pending</p>
									</div>
								</div>
								<div className="flex items-center gap-1.5 text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md border border-transparent">
									<Icon icon="solar:clock-circle-bold" className="size-4" />
									<span className="text-xs font-bold">Waiting</span>
								</div>
							</div>
							<div className="flex items-center justify-between p-3 bg-destructive/5">
								<div className="flex items-center gap-3">
									<div className="size-10 rounded-full overflow-hidden relative">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/22.jpg"
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<p className="text-sm font-bold text-foreground">James L.</p>
										<p className="text-xs text-destructive font-medium">Missed Deadline</p>
									</div>
								</div>
								<div className="flex items-center gap-1.5 text-destructive bg-white px-2 py-1 rounded-md border border-destructive/20 shadow-sm">
									<span className="text-xs font-bold">Fine: $5.00</span>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-lg font-bold font-heading text-foreground">Discussion</h2>
							<button className="size-8 flex items-center justify-center rounded-full bg-secondary text-foreground">
								<Icon icon="solar:pen-new-square-bold" className="size-4" />
							</button>
						</div>
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
							<div className="flex items-start gap-3 mb-3">
								<div className="size-9 rounded-full overflow-hidden shrink-0 mt-1">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/67.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="bg-secondary/50 p-3 rounded-2xl rounded-tl-none">
									<div className="flex items-center justify-between gap-4 mb-1">
										<span className="text-xs font-bold text-foreground">Samuel K.</span>
										<span className="text-[10px] text-muted-foreground">2m ago</span>
									</div>
									<p className="text-sm text-foreground leading-relaxed">
										The point about "active waiting" in chapter 4 really hit home. It's not just
										sitting around, it's preparation.
									</p>
								</div>
							</div>
							<div className="pl-12">
								<div className="flex items-center gap-2">
									<div className="flex -space-x-2">
										<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
											<img
												alt="User"
												src="https://randomuser.me/api/portraits/men/32.jpg"
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
											<img
												alt="User"
												src="https://randomuser.me/api/portraits/men/44.jpg"
												className="w-full h-full object-cover"
											/>
										</div>
									</div>
									<span className="text-xs font-medium text-muted-foreground">2 replies</span>
								</div>
							</div>
							<button className="w-full mt-4 py-2.5 border border-border rounded-lg text-sm font-semibold text-foreground flex items-center justify-center gap-2 hover:bg-secondary/50 transition-colors">
								View all 14 messages
								<Icon icon="solar:arrow-right-linear" className="size-4" />
							</button>
						</div>
					</section>
					<section className="pb-4">
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Updates</h2>
						<div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-start gap-3">
							<div className="bg-primary text-primary-foreground p-2 rounded-lg shrink-0">
								<Icon icon="solar:calendar-bold" className="size-5" />
							</div>
							<div>
								<h3 className="font-bold text-sm text-foreground mb-0.5">Monthly Meetup Changed</h3>
								<p className="text-xs text-muted-foreground leading-relaxed">
									The location for this Saturday's meetup has been moved to The Roast Coffee House
									downtown. Same time (7:00 AM).
								</p>
							</div>
						</div>
					</section>
					<section className="pb-4">
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Achievements</h2>
						<div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
							<div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white p-3 rounded-xl shrink-0 shadow-md">
								<Icon icon="solar:cup-star-bold" className="size-7" />
							</div>
							<div className="flex-1">
								<h3 className="font-bold text-base text-foreground mb-1">
									Current Streak: 24 Days
								</h3>
								<p className="text-xs text-muted-foreground mb-2">
									You're on fire! Keep it up to reach 30 days.
								</p>
								<div className="flex items-center gap-2">
									<div className="flex-1 h-2 bg-white/60 rounded-full overflow-hidden">
										<div
											style="width: 80%"
											className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
										/>
									</div>
									<span className="text-xs font-bold text-amber-700">80%</span>
								</div>
							</div>
							<button className="mt-3 w-full py-2 bg-foreground text-background text-sm font-bold rounded-lg shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
								View Leaderboard
								<Icon icon="solar:arrow-right-linear" className="size-4" />
							</button>
						</div>
					</section>
				</div>
			</main>
			<nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-30 pb-safe">
				<div className="flex items-center justify-between px-6 py-2">
					<button className="flex flex-col items-center gap-1 p-2 text-primary">
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
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:menu-dots-circle-bold" className="size-6" />
						<span className="text-[10px] font-medium">More</span>
					</button>
				</div>
			</nav>
		</div>
	);
}
