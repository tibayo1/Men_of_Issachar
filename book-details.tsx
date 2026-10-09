import { Icon } from "@iconify/react";

export function BookDetails() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 py-3 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<h1 className="text-lg font-bold font-heading text-primary tracking-tight">Book Details</h1>
				<button className="p-2 -mr-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:menu-dots-bold" className="size-6 text-foreground" />
				</button>
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section>
						<div className="bg-card rounded-xl p-5 shadow-sm border border-border">
							<div className="flex gap-4 mb-5">
								<div className="w-28 h-40 shrink-0 rounded-lg overflow-hidden shadow-md bg-muted relative">
									<img
										alt="The Disciplined Life Book Cover"
										src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
										className="w-full h-full object-cover opacity-90"
									/>
									<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl font-bold font-heading text-foreground leading-tight mb-1">
										The Disciplined Life
									</h2>
									<p className="text-sm text-muted-foreground mb-3">Richard Taylor</p>
									<div className="flex items-center gap-2 mb-3">
										<span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wide rounded-sm">
											Active
										</span>
										<span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-sm">
											Day 24 of 30
										</span>
									</div>
									<div className="space-y-1.5">
										<div className="flex justify-between text-xs font-medium">
											<span>Overall Progress</span>
											<span className="text-primary">75%</span>
										</div>
										<div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden">
											<div className="h-full bg-primary w-3/4 rounded-full" />
										</div>
									</div>
								</div>
							</div>
							<div className="pt-4 border-t border-border">
								<p className="text-sm text-foreground leading-relaxed">
									A comprehensive guide to building self-discipline and creating lasting habits.
									This book explores the psychology of willpower, practical strategies for
									maintaining focus, and the importance of accountability in achieving personal
									goals.
								</p>
							</div>
						</div>
					</section>
					<section>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-lg font-bold font-heading text-foreground">Reading Schedule</h2>
							<button className="text-xs font-bold text-primary underline underline-offset-2">
								View Full
							</button>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="p-4 bg-emerald-50 border-emerald-100">
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Icon icon="solar:calendar-bold" className="size-5 text-emerald-600" />
										<span className="text-sm font-bold text-foreground">Oct 20-24</span>
									</div>
									<div className="flex items-center gap-1.5 text-emerald-600 bg-white px-2 py-1 rounded-md border border-emerald-200">
										<Icon icon="solar:check-circle-bold" className="size-4" />
										<span className="text-xs font-bold">Complete</span>
									</div>
								</div>
								<p className="text-sm text-foreground font-medium">
									Chapters 4-5: Active Waiting & Patience
								</p>
								<p className="text-xs text-muted-foreground mt-1">Pages 78-125</p>
							</div>
							<div className="p-4 bg-primary/5">
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Icon icon="solar:calendar-bold" className="size-5 text-primary" />
										<span className="text-sm font-bold text-foreground">Oct 25-29</span>
									</div>
									<div className="flex items-center gap-1.5 text-primary bg-white px-2 py-1 rounded-md border border-primary/20">
										<Icon icon="solar:clock-circle-bold" className="size-4" />
										<span className="text-xs font-bold">Current</span>
									</div>
								</div>
								<p className="text-sm text-foreground font-medium">
									Chapters 6-7: Building Systems
								</p>
								<p className="text-xs text-muted-foreground mt-1">Pages 126-178</p>
							</div>
							<div className="p-4">
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<Icon icon="solar:calendar-bold" className="size-5 text-muted-foreground" />
										<span className="text-sm font-bold text-foreground">Oct 30-Nov 3</span>
									</div>
									<div className="flex items-center gap-1.5 text-muted-foreground bg-secondary px-2 py-1 rounded-md">
										<span className="text-xs font-bold">Upcoming</span>
									</div>
								</div>
								<p className="text-sm text-foreground font-medium">
									Chapters 8-9: Long-term Thinking
								</p>
								<p className="text-xs text-muted-foreground mt-1">Pages 179-234</p>
							</div>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">
							Members Progress
						</h2>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative">
										<img
											alt="Marcus T."
											src="https://randomuser.me/api/portraits/men/44.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">Marcus T.</p>
										<p className="text-xs text-muted-foreground">On track · Last read 2h ago</p>
									</div>
									<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
										<Icon icon="solar:check-circle-bold" className="size-4" />
										<span className="text-xs font-bold">80%</span>
									</div>
								</div>
								<div className="space-y-1">
									<div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "80%" }} className="h-full bg-emerald-600 rounded-full" />
									</div>
								</div>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative">
										<img
											alt="You"
											src="https://randomuser.me/api/portraits/men/32.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">You</p>
										<p className="text-xs text-muted-foreground">On track · Last read 4h ago</p>
									</div>
									<div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
										<span className="text-xs font-bold">75%</span>
									</div>
								</div>
								<div className="space-y-1">
									<div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "75%" }} className="h-full bg-primary rounded-full" />
									</div>
								</div>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative">
										<img
											alt="David R."
											src="https://randomuser.me/api/portraits/men/86.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">David R.</p>
										<p className="text-xs text-muted-foreground">On track · Last read 1d ago</p>
									</div>
									<div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
										<span className="text-xs font-bold">72%</span>
									</div>
								</div>
								<div className="space-y-1">
									<div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "72%" }} className="h-full bg-primary rounded-full" />
									</div>
								</div>
							</div>
							<div className="p-4 bg-destructive/5">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative">
										<img
											alt="James L."
											src="https://randomuser.me/api/portraits/men/22.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">James L.</p>
										<p className="text-xs text-destructive font-medium">
											Behind schedule · 2 sections overdue
										</p>
									</div>
									<div className="flex items-center gap-1.5 text-destructive bg-white px-2 py-1 rounded-md border border-destructive/20">
										<Icon icon="solar:danger-triangle-bold" className="size-4" />
										<span className="text-xs font-bold">45%</span>
									</div>
								</div>
								<div className="space-y-1">
									<div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "45%" }} className="h-full bg-destructive rounded-full" />
									</div>
								</div>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative">
										<img
											alt="Samuel K."
											src="https://randomuser.me/api/portraits/men/67.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">Samuel K.</p>
										<p className="text-xs text-muted-foreground">On track · Last read 6h ago</p>
									</div>
									<div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
										<span className="text-xs font-bold">70%</span>
									</div>
								</div>
								<div className="space-y-1">
									<div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
										<div style={{ width: "70%" }} className="h-full bg-primary rounded-full" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">
							Accountability Rules
						</h2>
						<div className="bg-card rounded-xl p-5 shadow-sm border border-border space-y-4">
							<div className="flex items-start gap-3">
								<div className="bg-destructive/10 text-destructive p-2 rounded-lg shrink-0">
									<Icon icon="solar:danger-triangle-bold" className="size-5" />
								</div>
								<div className="flex-1">
									<h3 className="font-bold text-sm text-foreground mb-1">
										Missed Section Deadline
									</h3>
									<p className="text-xs text-muted-foreground leading-relaxed mb-2">
										If you don't complete a section by the deadline, a fine is automatically added
										to the pot.
									</p>
									<div className="flex items-center gap-2">
										<span className="text-xs font-bold text-destructive">Fine Amount:</span>
										<span className="text-sm font-bold text-foreground bg-destructive/10 px-2 py-0.5 rounded-md border border-destructive/20">
											$5.00
										</span>
									</div>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="bg-chart-5/10 text-chart-5 p-2 rounded-lg shrink-0">
									<Icon icon="solar:calendar-bold" className="size-5" />
								</div>
								<div className="flex-1">
									<h3 className="font-bold text-sm text-foreground mb-1">Book Completion Bonus</h3>
									<p className="text-xs text-muted-foreground leading-relaxed mb-2">
										Complete all sections on time and you're eligible for a share of the pot at the
										end.
									</p>
									<div className="flex items-center gap-2">
										<span className="text-xs font-bold text-chart-5">Current Pot:</span>
										<span className="text-sm font-bold text-foreground bg-chart-5/10 px-2 py-0.5 rounded-md border border-chart-5/20">
											$45.00
										</span>
									</div>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
									<Icon icon="solar:users-group-rounded-bold" className="size-5" />
								</div>
								<div className="flex-1">
									<h3 className="font-bold text-sm text-foreground mb-1">Group Meetups</h3>
									<p className="text-xs text-muted-foreground leading-relaxed">
										Monthly in-person discussions are mandatory. Missing a meetup results in a fine.
									</p>
									<div className="flex items-center gap-2 mt-2">
										<span className="text-xs font-bold text-primary">Meetup Fine:</span>
										<span className="text-sm font-bold text-foreground bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
											$10.00
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">
							Section Breakdown
						</h2>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="p-4 flex items-center justify-between">
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-0.5">Chapter 1: Foundation</p>
									<p className="text-xs text-muted-foreground">Pages 1-25</p>
								</div>
								<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
									<Icon icon="solar:check-circle-bold" className="size-4" />
									<span className="text-xs font-bold">Done</span>
								</div>
							</div>
							<div className="p-4 flex items-center justify-between">
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-0.5">Chapter 2: Mindset</p>
									<p className="text-xs text-muted-foreground">Pages 26-52</p>
								</div>
								<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
									<Icon icon="solar:check-circle-bold" className="size-4" />
									<span className="text-xs font-bold">Done</span>
								</div>
							</div>
							<div className="p-4 flex items-center justify-between">
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-0.5">Chapter 3: Early Wins</p>
									<p className="text-xs text-muted-foreground">Pages 53-77</p>
								</div>
								<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
									<Icon icon="solar:check-circle-bold" className="size-4" />
									<span className="text-xs font-bold">Done</span>
								</div>
							</div>
							<div className="p-4 flex items-center justify-between bg-primary/5">
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-0.5">
										Chapter 4-5: Active Waiting
									</p>
									<p className="text-xs text-muted-foreground">Pages 78-125</p>
								</div>
								<div className="flex items-center gap-1.5 text-emerald-600 bg-white px-2 py-1 rounded-md border border-emerald-200">
									<Icon icon="solar:check-circle-bold" className="size-4" />
									<span className="text-xs font-bold">Done</span>
								</div>
							</div>
							<div className="p-4 flex items-center justify-between bg-primary/10 border-y-2 border-primary/20">
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-0.5">
										Chapter 6-7: Building Systems
									</p>
									<p className="text-xs text-muted-foreground">Pages 126-178</p>
								</div>
								<div className="flex items-center gap-1.5 text-primary bg-white px-2 py-1 rounded-md border border-primary/30 shadow-sm">
									<Icon icon="solar:clock-circle-bold" className="size-4" />
									<span className="text-xs font-bold">Current</span>
								</div>
							</div>
							<div className="p-4 flex items-center justify-between">
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-0.5">
										Chapter 8-9: Long-term Thinking
									</p>
									<p className="text-xs text-muted-foreground">Pages 179-234</p>
								</div>
								<div className="flex items-center gap-1.5 text-muted-foreground bg-secondary px-2 py-1 rounded-md">
									<span className="text-xs font-bold">Locked</span>
								</div>
							</div>
							<div className="p-4 flex items-center justify-between">
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-0.5">Chapter 10: Mastery</p>
									<p className="text-xs text-muted-foreground">Pages 235-280</p>
								</div>
								<div className="flex items-center gap-1.5 text-muted-foreground bg-secondary px-2 py-1 rounded-md">
									<span className="text-xs font-bold">Locked</span>
								</div>
							</div>
						</div>
					</section>
					<div className="grid grid-cols-2 gap-3 pb-4">
						<button className="py-3 px-4 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
							<Icon icon="solar:book-2-bold" className="size-5" />
							View Sections
						</button>
						<button className="py-3 px-4 bg-card text-foreground border border-border rounded-xl font-bold text-sm shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
							<Icon icon="solar:chat-square-like-bold" className="size-5" />
							Discuss Book
						</button>
						<button className="col-span-2 py-3 px-4 bg-card text-foreground border border-border rounded-xl font-bold text-sm shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
							<Icon icon="solar:share-bold" className="size-5" />
							Invite Members
						</button>
					</div>
				</div>
			</main>
			<nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-30 pb-safe">
				<div className="flex items-center justify-between px-6 py-2">
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:home-2-bold" className="size-6" />
						<span className="text-[10px] font-medium">Home</span>
					</button>
					<button className="flex flex-col items-center gap-1 p-2 text-primary">
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
