import { Icon } from "@iconify/react";

export function Search() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<div className="flex items-center gap-3 mb-4">
					<button className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
						<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
					</button>
					<div className="flex-1 relative">
						<input
							type="text"
							className="w-full pl-10 pr-4 py-3 rounded-xl bg-input border-0 text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
							placeholder="Search books, discussions, members..."
						/>
						<Icon
							icon="solar:magnifer-linear"
							className="size-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2"
						/>
					</div>
				</div>
				<div className="flex gap-2">
					<button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg">
						<Icon icon="solar:book-2-bold" className="size-4 inline-block mr-1.5 -mt-0.5" />
						Books
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-lg hover:bg-secondary/80 transition-colors">
						<Icon
							icon="solar:chat-square-like-bold"
							className="size-4 inline-block mr-1.5 -mt-0.5"
						/>
						Discussions
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-lg hover:bg-secondary/80 transition-colors">
						<Icon icon="solar:user-bold" className="size-4 inline-block mr-1.5 -mt-0.5" />
						Members
					</button>
				</div>
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section>
						<h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
							Recent Searches
						</h2>
						<div className="space-y-2">
							<button className="w-full flex items-center justify-between p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:clock-circle-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Discipline</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="w-full flex items-center justify-between p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:clock-circle-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Marcus T.</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="w-full flex items-center justify-between p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:clock-circle-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Chapter 4 discussion</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
						</div>
					</section>
					<section>
						<h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
							Suggested Searches
						</h2>
						<div className="flex flex-wrap gap-2">
							<button className="px-3 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
								Stoicism
							</button>
							<button className="px-3 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
								Morning Routine
							</button>
							<button className="px-3 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
								Active Members
							</button>
							<button className="px-3 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
								New Books
							</button>
							<button className="px-3 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-foreground hover:bg-secondary/50 transition-colors">
								Leadership
							</button>
						</div>
					</section>
					<section>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-lg font-bold font-heading text-foreground">Results</h2>
							<span className="text-xs font-medium text-muted-foreground">24 found</span>
						</div>
						<div className="space-y-3">
							<button className="w-full flex items-start gap-3 p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="w-12 h-16 shrink-0 rounded-md overflow-hidden shadow-sm bg-muted relative">
									<img
										alt="Book Cover"
										src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
										className="w-full h-full object-cover opacity-90"
									/>
									<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-start gap-2 mb-1">
										<div className="bg-primary/10 p-1 rounded">
											<Icon icon="solar:book-2-bold" className="size-3 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="font-bold text-sm text-foreground leading-tight">
												Discipline Equals Freedom
											</h3>
											<p className="text-xs text-muted-foreground">Jocko Willink</p>
										</div>
									</div>
									<p className="text-xs text-muted-foreground line-clamp-2 mt-1">
										Field manual for mental and physical discipline from Navy SEAL veteran...
									</p>
								</div>
							</button>
							<button className="w-full flex items-start gap-3 p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="size-12 shrink-0 rounded-full overflow-hidden relative">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/44.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-start gap-2 mb-1">
										<div className="bg-primary/10 p-1 rounded">
											<Icon icon="solar:user-bold" className="size-3 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="font-bold text-sm text-foreground leading-tight">
												Marcus Thompson
											</h3>
											<p className="text-xs text-muted-foreground">@marcust · Member since 2023</p>
										</div>
									</div>
									<p className="text-xs text-muted-foreground line-clamp-2 mt-1">
										Active in 12 discussions · Completed 8 books this year
									</p>
								</div>
							</button>
							<button className="w-full flex items-start gap-3 p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="size-12 shrink-0 rounded-lg bg-secondary flex items-center justify-center">
									<Icon icon="solar:chat-square-like-bold" className="size-6 text-primary" />
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-start gap-2 mb-1">
										<div className="bg-primary/10 p-1 rounded">
											<Icon icon="solar:chat-square-like-bold" className="size-3 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="font-bold text-sm text-foreground leading-tight">
												Chapter 4: Active Waiting
											</h3>
											<p className="text-xs text-muted-foreground">
												The Disciplined Life · 18 replies
											</p>
										</div>
									</div>
									<p className="text-xs text-muted-foreground line-clamp-2 mt-1">
										Discussion about the concept of preparation during waiting periods...
									</p>
								</div>
							</button>
							<button className="w-full flex items-start gap-3 p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="w-12 h-16 shrink-0 rounded-md overflow-hidden shadow-sm bg-muted relative">
									<img
										alt="Book Cover"
										src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
										className="w-full h-full object-cover opacity-90"
									/>
									<div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-start gap-2 mb-1">
										<div className="bg-primary/10 p-1 rounded">
											<Icon icon="solar:book-2-bold" className="size-3 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="font-bold text-sm text-foreground leading-tight">
												The Daily Stoic
											</h3>
											<p className="text-xs text-muted-foreground">Ryan Holiday</p>
										</div>
									</div>
									<p className="text-xs text-muted-foreground line-clamp-2 mt-1">
										366 days of Stoic insights and exercises for a better life...
									</p>
								</div>
							</button>
							<button className="w-full flex items-start gap-3 p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="size-12 shrink-0 rounded-lg bg-secondary flex items-center justify-center">
									<Icon icon="solar:chat-square-like-bold" className="size-6 text-primary" />
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-start gap-2 mb-1">
										<div className="bg-primary/10 p-1 rounded">
											<Icon icon="solar:chat-square-like-bold" className="size-3 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="font-bold text-sm text-foreground leading-tight">
												Best Morning Routines
											</h3>
											<p className="text-xs text-muted-foreground">
												General Discussion · 42 replies
											</p>
										</div>
									</div>
									<p className="text-xs text-muted-foreground line-clamp-2 mt-1">
										Share your morning routine and what works best for discipline...
									</p>
								</div>
							</button>
							<button className="w-full flex items-start gap-3 p-3 bg-card rounded-xl border border-border hover:bg-secondary/30 transition-colors">
								<div className="size-12 shrink-0 rounded-full overflow-hidden relative">
									<img
										alt="User"
										src="https://randomuser.me/api/portraits/men/86.jpg"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-start gap-2 mb-1">
										<div className="bg-primary/10 p-1 rounded">
											<Icon icon="solar:user-bold" className="size-3 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="font-bold text-sm text-foreground leading-tight">
												David Richardson
											</h3>
											<p className="text-xs text-muted-foreground">@davidr · Member since 2024</p>
										</div>
									</div>
									<p className="text-xs text-muted-foreground line-clamp-2 mt-1">
										Active in 5 discussions · Completed 3 books this year
									</p>
								</div>
							</button>
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
					<button className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors">
						<Icon icon="solar:menu-dots-circle-bold" className="size-6" />
						<span className="text-[10px] font-medium">More</span>
					</button>
				</div>
			</nav>
		</div>
	);
}
