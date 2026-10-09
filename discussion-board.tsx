import { Icon } from "@iconify/react";

export function DiscussionBoard() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<div className="flex-1 text-center">
					<h1 className="text-xl font-bold font-heading text-primary tracking-tight">
						Discussion Forum
					</h1>
					<p className="text-xs font-medium text-muted-foreground">The Disciplined Life</p>
				</div>
				<button className="p-2 -mr-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:magnifer-linear" className="size-6 text-foreground" />
				</button>
			</header>
			<div className="px-5 py-4 border-b border-border bg-background">
				<div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
					<button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full whitespace-nowrap shadow-sm">
						All Threads
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full whitespace-nowrap hover:bg-secondary/80">
						Chapter 1-2
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full whitespace-nowrap hover:bg-secondary/80">
						Chapter 3-4
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full whitespace-nowrap hover:bg-secondary/80">
						Chapter 5-6
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full whitespace-nowrap hover:bg-secondary/80">
						Recent Activity
					</button>
				</div>
			</div>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-3">
					<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
						<div className="flex items-start gap-3 mb-3">
							<div className="size-10 rounded-full overflow-hidden shrink-0">
								<img
									alt="User"
									src="https://randomuser.me/api/portraits/men/67.jpg"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between gap-2 mb-1">
									<div className="flex items-center gap-2">
										<span className="text-sm font-bold text-foreground">Samuel K.</span>
										<span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
											Ch 4
										</span>
									</div>
									<span className="text-xs text-muted-foreground shrink-0">2h ago</span>
								</div>
								<h3 className="text-base font-bold font-heading text-foreground mb-1 leading-snug">
									What does "active waiting" really mean in practice?
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
									The author mentions this concept but I'm struggling to understand how it applies
									to daily life. Is it about being prepared or something more...
								</p>
								<div className="mt-3 flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
									<Icon icon="solar:microphone-bold" className="size-5 text-primary shrink-0" />
									<div className="flex-1 flex items-center gap-1 h-8">
										<div className="w-1 bg-primary/30 rounded-full h-3" />
										<div className="w-1 bg-primary/50 rounded-full h-5" />
										<div className="w-1 bg-primary/70 rounded-full h-7" />
										<div className="w-1 bg-primary rounded-full h-6" />
										<div className="w-1 bg-primary/80 rounded-full h-4" />
										<div className="w-1 bg-primary/60 rounded-full h-6" />
										<div className="w-1 bg-primary/40 rounded-full h-5" />
										<div className="w-1 bg-primary/50 rounded-full h-7" />
										<div className="w-1 bg-primary/70 rounded-full h-4" />
										<div className="w-1 bg-primary rounded-full h-6" />
										<div className="w-1 bg-primary/60 rounded-full h-5" />
										<div className="w-1 bg-primary/40 rounded-full h-3" />
										<div className="w-1 bg-primary/50 rounded-full h-6" />
										<div className="w-1 bg-primary/70 rounded-full h-7" />
										<div className="w-1 bg-primary/80 rounded-full h-5" />
										<div className="w-1 bg-primary/60 rounded-full h-4" />
										<div className="w-1 bg-primary/40 rounded-full h-6" />
										<div className="w-1 bg-primary/50 rounded-full h-5" />
										<div className="w-1 bg-primary/30 rounded-full h-3" />
									</div>
									<span className="text-xs font-semibold text-muted-foreground shrink-0">1:24</span>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-4 pt-2 border-t border-border">
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:chat-round-dots-bold" className="size-5" />
								<span className="text-sm font-semibold">12</span>
							</div>
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:heart-bold" className="size-5" />
								<span className="text-sm font-semibold">8</span>
							</div>
							<div className="ml-auto flex -space-x-2">
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
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/women/23.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
						<div className="flex items-start gap-3 mb-3">
							<div className="size-10 rounded-full overflow-hidden shrink-0">
								<img
									alt="User"
									src="https://randomuser.me/api/portraits/men/44.jpg"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between gap-2 mb-1">
									<div className="flex items-center gap-2">
										<span className="text-sm font-bold text-foreground">Marcus T.</span>
										<span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
											Ch 2
										</span>
									</div>
									<span className="text-xs text-muted-foreground shrink-0">5h ago</span>
								</div>
								<h3 className="text-base font-bold font-heading text-foreground mb-1 leading-snug">
									The importance of morning routines
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
									Chapter 2 really emphasized how morning routines set the tone. I've been
									experimenting with waking up at 5 AM for the past week and...
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 pt-2 border-t border-border">
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:chat-round-dots-bold" className="size-5" />
								<span className="text-sm font-semibold">24</span>
							</div>
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:heart-bold" className="size-5" />
								<span className="text-sm font-semibold">15</span>
							</div>
							<div className="ml-auto flex -space-x-2">
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/67.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/women/45.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/22.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/women/67.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
						<div className="flex items-start gap-3 mb-3">
							<div className="size-10 rounded-full overflow-hidden shrink-0">
								<img
									alt="User"
									src="https://randomuser.me/api/portraits/women/23.jpg"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between gap-2 mb-1">
									<div className="flex items-center gap-2">
										<span className="text-sm font-bold text-foreground">Rebecca M.</span>
										<span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
											Ch 5
										</span>
									</div>
									<span className="text-xs text-muted-foreground shrink-0">8h ago</span>
								</div>
								<h3 className="text-base font-bold font-heading text-foreground mb-1 leading-snug">
									Balancing discipline with flexibility
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
									The section on "rigid flexibility" seems contradictory at first. How do you
									maintain structure while staying adaptable to life's...
								</p>
								<div className="mt-3 grid grid-cols-2 gap-2">
									<div className="relative aspect-square rounded-lg overflow-hidden">
										<img
											alt="Attached image"
											src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="relative aspect-square rounded-lg overflow-hidden">
										<img
											alt="Attached image"
											src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-4 pt-2 border-t border-border">
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:chat-round-dots-bold" className="size-5" />
								<span className="text-sm font-semibold">18</span>
							</div>
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:heart-bold" className="size-5" />
								<span className="text-sm font-semibold">11</span>
							</div>
							<div className="ml-auto flex -space-x-2">
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/86.jpg"
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
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/women/56.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
						<div className="flex items-start gap-3 mb-3">
							<div className="size-10 rounded-full overflow-hidden shrink-0">
								<img
									alt="User"
									src="https://randomuser.me/api/portraits/men/22.jpg"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between gap-2 mb-1">
									<div className="flex items-center gap-2">
										<span className="text-sm font-bold text-foreground">James L.</span>
										<span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
											Ch 3
										</span>
									</div>
									<span className="text-xs text-muted-foreground shrink-0">12h ago</span>
								</div>
								<h3 className="text-base font-bold font-heading text-foreground mb-1 leading-snug">
									Accountability partners changed my life
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
									After reading chapter 3, I reached out to find an accountability partner. The
									difference has been incredible. We check in daily and...
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 pt-2 border-t border-border">
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:chat-round-dots-bold" className="size-5" />
								<span className="text-sm font-semibold">31</span>
							</div>
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:heart-bold" className="size-5" />
								<span className="text-sm font-semibold">22</span>
							</div>
							<div className="ml-auto flex -space-x-2">
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
										src="https://randomuser.me/api/portraits/women/34.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/67.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/women/78.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
						<div className="flex items-start gap-3 mb-3">
							<div className="size-10 rounded-full overflow-hidden shrink-0">
								<img
									alt="User"
									src="https://randomuser.me/api/portraits/men/86.jpg"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between gap-2 mb-1">
									<div className="flex items-center gap-2">
										<span className="text-sm font-bold text-foreground">David R.</span>
										<span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
											Ch 1
										</span>
									</div>
									<span className="text-xs text-muted-foreground shrink-0">1d ago</span>
								</div>
								<h3 className="text-base font-bold font-heading text-foreground mb-1 leading-snug">
									Starting with small wins - my experience
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
									The first chapter's advice about starting small really resonated. Instead of
									overhauling everything, I focused on one habit at a time...
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 pt-2 border-t border-border">
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:chat-round-dots-bold" className="size-5" />
								<span className="text-sm font-semibold">9</span>
							</div>
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:heart-bold" className="size-5" />
								<span className="text-sm font-semibold">6</span>
							</div>
							<div className="ml-auto flex -space-x-2">
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/women/23.jpg"
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
						</div>
					</div>
					<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
						<div className="flex items-start gap-3 mb-3">
							<div className="size-10 rounded-full overflow-hidden shrink-0">
								<img
									alt="User"
									src="https://randomuser.me/api/portraits/women/45.jpg"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between gap-2 mb-1">
									<div className="flex items-center gap-2">
										<span className="text-sm font-bold text-foreground">Angela P.</span>
										<span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wide rounded-sm">
											Ch 4
										</span>
									</div>
									<span className="text-xs text-muted-foreground shrink-0">1d ago</span>
								</div>
								<h3 className="text-base font-bold font-heading text-foreground mb-1 leading-snug">
									Struggling with the 30-day commitment
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
									I'm finding it hard to stay committed for the full 30 days. Any tips from those
									who've successfully completed similar challenges?...
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 pt-2 border-t border-border">
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:chat-round-dots-bold" className="size-5" />
								<span className="text-sm font-semibold">16</span>
							</div>
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Icon icon="solar:heart-bold" className="size-5" />
								<span className="text-sm font-semibold">9</span>
							</div>
							<div className="ml-auto flex -space-x-2">
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/22.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/67.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="size-6 rounded-full ring-2 ring-card overflow-hidden">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/women/89.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div className="fixed bottom-24 right-5 z-20">
				<button className="size-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform">
					<Icon icon="solar:pen-new-square-bold" className="size-6" />
				</button>
				<div className="absolute bottom-full right-0 mb-3 bg-card rounded-2xl shadow-xl border border-border p-3 min-w-[200px]">
					<div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3 px-1">
						Attach Media
					</div>
					<button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
						<div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
							<Icon icon="solar:microphone-bold" className="size-5 text-primary" />
						</div>
						<div className="flex-1 text-left">
							<div className="text-sm font-bold text-foreground">Voice Note</div>
							<div className="text-xs text-muted-foreground">Record audio</div>
						</div>
					</button>
					<button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
						<div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
							<Icon icon="solar:camera-bold" className="size-5 text-primary" />
						</div>
						<div className="flex-1 text-left">
							<div className="text-sm font-bold text-foreground">Camera</div>
							<div className="text-xs text-muted-foreground">Take a photo</div>
						</div>
					</button>
					<button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
						<div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
							<Icon icon="solar:gallery-bold" className="size-5 text-primary" />
						</div>
						<div className="flex-1 text-left">
							<div className="text-sm font-bold text-foreground">Gallery</div>
							<div className="text-xs text-muted-foreground">Choose from library</div>
						</div>
					</button>
				</div>
			</div>
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
					<button className="flex flex-col items-center gap-1 p-2 text-primary">
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
