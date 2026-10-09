import { Icon } from "@iconify/react";

export function Notifications() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<div className="flex items-center gap-3">
					<button className="p-2 -ml-2">
						<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
					</button>
					<h1 className="text-2xl font-bold font-heading text-primary tracking-tight">
						Notifications
					</h1>
				</div>
				<button className="p-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:settings-bold" className="size-6 text-foreground" />
				</button>
			</header>
			<div className="px-5 py-3 bg-background border-b border-border sticky top-[88px] z-10">
				<div className="flex gap-2 overflow-x-auto">
					<button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-lg whitespace-nowrap shadow-sm">
						All
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-lg whitespace-nowrap">
						Reminders
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-lg whitespace-nowrap">
						Fines
					</button>
					<button className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-lg whitespace-nowrap">
						Updates
					</button>
				</div>
			</div>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="divide-y divide-border">
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="bg-primary/10 p-3 rounded-xl shrink-0">
							<Icon icon="solar:book-2-bold" className="size-6 text-primary" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Reading Reminder</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">2h ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Don't forget your daily reading! You have 15 pages left to complete today's goal.
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="bg-destructive/10 p-3 rounded-xl shrink-0">
							<Icon icon="solar:danger-triangle-bold" className="size-6 text-destructive" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Fine Alert</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">5h ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								You have a pending fine of <span className="font-bold text-destructive">$5.00</span>{" "}
								for missing yesterday's deadline. Pay now to avoid additional charges.
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="size-12 rounded-full overflow-hidden shrink-0 ring-2 ring-border">
							<img
								alt="User"
								src="https://randomuser.me/api/portraits/men/67.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">New Message in Group Chat</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">8h ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">Samuel K.</span> sent a message:
								"The point about 'active waiting' in chapter 4 really hit home..."
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="bg-primary/10 p-3 rounded-xl shrink-0">
							<Icon icon="solar:chat-square-like-bold" className="size-6 text-primary" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Discussion Reply</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">1d ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">Marcus T.</span> replied to your
								comment on "The Disciplined Life" discussion thread.
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="size-12 rounded-full overflow-hidden shrink-0 ring-2 ring-border">
							<img
								alt="User"
								src="https://randomuser.me/api/portraits/women/21.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">New Member Joined</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">1d ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">Sarah M.</span> has joined Iron &
								Ink. Welcome them to the community!
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="bg-emerald-500/10 p-3 rounded-xl shrink-0">
							<Icon icon="solar:check-circle-bold" className="size-6 text-emerald-600" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Payment Confirmed</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">2d ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Your fine payment of <span className="font-bold text-foreground">$5.00</span> has
								been successfully processed and added to the pot.
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="bg-primary/10 p-3 rounded-xl shrink-0">
							<Icon icon="solar:bookmark-bold" className="size-6 text-primary" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Book Section Update</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">3d ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Next week's reading schedule has been updated. Check the Books section for the new
								chapters.
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="bg-primary/10 p-3 rounded-xl shrink-0">
							<Icon icon="solar:calendar-bold" className="size-6 text-primary" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Meetup Location Changed</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">3d ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								This Saturday's meetup has been moved to The Roast Coffee House downtown. Same time
								(7:00 AM).
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="size-12 rounded-full overflow-hidden shrink-0 ring-2 ring-border">
							<img
								alt="User"
								src="https://randomuser.me/api/portraits/men/44.jpg"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Discussion Reply</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">4d ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								<span className="font-semibold text-foreground">Marcus T.</span> agreed with your
								point about discipline vs. motivation in the group discussion.
							</p>
						</div>
					</div>
					<div className="p-5 flex items-start gap-4 bg-card active:bg-secondary/30 transition-colors">
						<div className="bg-primary/10 p-3 rounded-xl shrink-0">
							<Icon icon="solar:book-2-bold" className="size-6 text-primary" />
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex items-start justify-between gap-2 mb-1">
								<h3 className="font-bold text-sm text-foreground">Daily Reading Reminder</h3>
								<span className="text-xs text-muted-foreground whitespace-nowrap">5d ago</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Time for your daily reading! Complete Chapter 3 to stay on track with your 30-day
								challenge.
							</p>
						</div>
					</div>
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
