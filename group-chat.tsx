import { Icon } from "@iconify/react";

export function GroupChat() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-4 py-3 bg-background border-b border-border/40 backdrop-blur-md z-20">
				<button className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<div className="flex-1 flex items-center justify-center gap-3">
					<div className="size-10 rounded-lg overflow-hidden bg-muted shadow-sm">
						<img
							alt="Book Cover"
							src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<h1 className="text-base font-bold font-heading text-foreground leading-tight">
							The Disciplined Life
						</h1>
						<p className="text-xs text-muted-foreground">8 members</p>
					</div>
				</div>
				<button className="p-2 -mr-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:menu-dots-bold" className="size-6 text-foreground" />
				</button>
			</header>
			<main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-24">
				<div className="flex items-start gap-3">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="Marcus"
								src="https://randomuser.me/api/portraits/men/44.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-sm font-bold text-foreground">Marcus T.</span>
							<span className="text-xs text-muted-foreground">8:42 AM</span>
						</div>
						<div className="bg-card border border-border rounded-2xl rounded-tl-sm p-3 shadow-sm">
							<p className="text-sm text-foreground leading-relaxed">
								Just finished chapter 5! The section on "disciplined waiting" was incredible. Anyone
								else struck by that part?
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="Samuel"
								src="https://randomuser.me/api/portraits/men/67.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-sm font-bold text-foreground">Samuel K.</span>
							<span className="text-xs text-muted-foreground">8:45 AM</span>
						</div>
						<div className="bg-card border border-border rounded-2xl rounded-tl-sm p-3 shadow-sm">
							<p className="text-sm text-foreground leading-relaxed">
								Yes! That really resonated with me. It's not passive at all - it's active
								preparation.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3 flex-row-reverse">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="You"
								src="https://randomuser.me/api/portraits/men/32.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1 justify-end">
							<span className="text-xs text-muted-foreground">8:47 AM</span>
							<span className="text-sm font-bold text-foreground">You</span>
						</div>
						<div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 shadow-sm ml-auto max-w-[85%]">
							<p className="text-sm leading-relaxed">
								Exactly! And the analogy with the athlete preparing for competition was perfect. You
								can't just show up on game day.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="David"
								src="https://randomuser.me/api/portraits/men/86.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-muted-foreground rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-sm font-bold text-foreground">David R.</span>
							<span className="text-xs text-muted-foreground">8:50 AM</span>
						</div>
						<div className="bg-card border border-border rounded-2xl rounded-tl-sm p-3 shadow-sm">
							<p className="text-sm text-foreground leading-relaxed mb-3">
								I'm on chapter 4 still but catching up tonight. The book is dense but worth it.
							</p>
							<div className="bg-secondary/50 rounded-lg p-2 flex items-center gap-2">
								<Icon icon="solar:gallery-bold" className="size-10 text-muted-foreground" />
								<div className="flex-1 min-w-0">
									<p className="text-xs font-medium text-foreground truncate">reading_notes.jpg</p>
									<p className="text-[10px] text-muted-foreground">245 KB</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3 flex-row-reverse">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="You"
								src="https://randomuser.me/api/portraits/men/32.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1 justify-end">
							<span className="text-xs text-muted-foreground">8:52 AM</span>
							<span className="text-sm font-bold text-foreground">You</span>
						</div>
						<div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 shadow-sm ml-auto max-w-[85%]">
							<p className="text-sm leading-relaxed">
								Take your time David! Chapter 4 sets up everything for chapter 5.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="James"
								src="https://randomuser.me/api/portraits/men/22.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-sm font-bold text-foreground">James L.</span>
							<span className="text-xs text-muted-foreground">9:01 AM</span>
						</div>
						<div className="bg-card border border-border rounded-2xl rounded-tl-sm p-3 shadow-sm">
							<p className="text-sm text-foreground leading-relaxed">
								I've been thinking about how this applies to building habits. The discipline has to
								come before the motivation.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="Samuel"
								src="https://randomuser.me/api/portraits/men/67.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-sm font-bold text-foreground">Samuel K.</span>
							<span className="text-xs text-muted-foreground">9:05 AM</span>
						</div>
						<div className="bg-card border border-border rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
							<div className="flex items-center gap-3">
								<button className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0">
									<Icon icon="solar:play-bold" className="size-4" />
								</button>
								<div className="flex-1 flex items-center gap-2">
									<div className="flex-1 h-8 flex items-center gap-0.5">
										<div className="w-1 bg-primary/30 rounded-full h-3" />
										<div className="w-1 bg-primary/30 rounded-full h-5" />
										<div className="w-1 bg-primary/30 rounded-full h-4" />
										<div className="w-1 bg-primary/30 rounded-full h-6" />
										<div className="w-1 bg-primary/30 rounded-full h-5" />
										<div className="w-1 bg-primary/30 rounded-full h-7" />
										<div className="w-1 bg-primary/30 rounded-full h-4" />
										<div className="w-1 bg-primary/30 rounded-full h-6" />
										<div className="w-1 bg-primary/30 rounded-full h-5" />
										<div className="w-1 bg-primary/30 rounded-full h-4" />
										<div className="w-1 bg-primary/30 rounded-full h-6" />
										<div className="w-1 bg-primary/30 rounded-full h-3" />
										<div className="w-1 bg-primary/30 rounded-full h-5" />
										<div className="w-1 bg-primary/30 rounded-full h-4" />
										<div className="w-1 bg-primary/30 rounded-full h-6" />
										<div className="w-1 bg-primary/30 rounded-full h-5" />
										<div className="w-1 bg-primary/30 rounded-full h-4" />
										<div className="w-1 bg-primary/30 rounded-full h-3" />
										<div className="w-1 bg-primary/30 rounded-full h-5" />
										<div className="w-1 bg-primary/30 rounded-full h-6" />
									</div>
									<span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
										0:42
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3 flex-row-reverse">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="You"
								src="https://randomuser.me/api/portraits/men/32.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1 justify-end">
							<span className="text-xs text-muted-foreground">9:03 AM</span>
							<span className="text-sm font-bold text-foreground">You</span>
						</div>
						<div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 shadow-sm ml-auto max-w-[85%]">
							<p className="text-sm leading-relaxed">
								💯 That's the whole point! Motivation follows action, not the other way around.
							</p>
						</div>
					</div>
				</div>
				<div className="flex items-start gap-3 flex-row-reverse">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="You"
								src="https://randomuser.me/api/portraits/men/32.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1 justify-end">
							<span className="text-xs text-muted-foreground">9:06 AM</span>
							<span className="text-sm font-bold text-foreground">You</span>
						</div>
						<div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-2 shadow-sm ml-auto max-w-[85%]">
							<div className="grid grid-cols-2 gap-2">
								<div className="aspect-square rounded-lg overflow-hidden bg-primary-foreground/10">
									<img
										alt="Shared image"
										src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="aspect-square rounded-lg overflow-hidden bg-primary-foreground/10">
									<img
										alt="Shared image"
										src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							<p className="text-sm leading-relaxed mt-2">Check out these quotes I highlighted!</p>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center py-2">
					<div className="bg-secondary/70 px-3 py-1 rounded-full">
						<span className="text-xs font-medium text-muted-foreground">Today</span>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<div className="relative shrink-0">
						<div className="size-10 rounded-full overflow-hidden ring-2 ring-background">
							<img
								alt="Marcus"
								src="https://randomuser.me/api/portraits/men/44.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute bottom-0 right-0 size-3 bg-emerald-500 rounded-full ring-2 ring-background" />
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-sm font-bold text-foreground">Marcus T.</span>
							<span className="text-xs text-muted-foreground">Just now</span>
						</div>
						<div className="bg-card border border-border rounded-2xl rounded-tl-sm p-3 shadow-sm">
							<p className="text-sm text-foreground leading-relaxed">
								Who's ready for Saturday's meetup? We can dive deeper into these concepts face to
								face.
							</p>
						</div>
					</div>
				</div>
			</main>
			<div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-30 pb-safe">
				<div className="px-4 py-3">
					<div className="flex items-end gap-2">
						<button className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors shrink-0">
							<Icon icon="solar:gallery-bold" className="size-5" />
						</button>
						<button className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors shrink-0">
							<Icon icon="solar:camera-bold" className="size-5" />
						</button>
						<button className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors shrink-0">
							<Icon icon="solar:microphone-bold" className="size-5" />
						</button>
						<button className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors shrink-0">
							<Icon icon="solar:paperclip-bold" className="size-5" />
						</button>
						<div className="flex-1 bg-input rounded-2xl px-4 py-3 min-h-[44px] max-h-32">
							<textarea
								rows="1"
								className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none"
								placeholder="Type a message..."
							/>
						</div>
						<button className="p-2.5 rounded-full bg-primary text-primary-foreground shadow-sm active:scale-95 transition-transform shrink-0">
							<Icon icon="solar:plain-bold" className="size-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
