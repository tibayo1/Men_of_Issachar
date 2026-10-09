import { Icon } from "@iconify/react";

export function Settings() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="p-2 rounded-full hover:bg-secondary transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<h1 className="text-xl font-bold font-heading text-primary tracking-tight">Settings</h1>
				<div className="w-10" />
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section>
						<div className="flex items-center gap-2 mb-3 px-1">
							<Icon icon="solar:user-bold" className="size-5 text-primary" />
							<h2 className="text-base font-bold font-heading text-foreground uppercase tracking-wide">
								Account Settings
							</h2>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:user-id-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Edit Profile</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:lock-password-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Change Password</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:bell-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">
										Notification Preferences
									</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:letter-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Change Email</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:camera-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">
										Change Profile Picture
									</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
						</div>
					</section>
					<section>
						<div className="flex items-center gap-2 mb-3 px-1">
							<Icon icon="solar:bell-bold" className="size-5 text-primary" />
							<h2 className="text-base font-bold font-heading text-foreground uppercase tracking-wide">
								Notifications
							</h2>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<Icon icon="solar:book-2-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Reading Reminders</span>
								</div>
								<div className="relative inline-block w-11 h-6">
									<input type="checkbox" checked className="sr-only peer" />
									<div className="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-focus:ring-offset-background transition-colors">
										<div className="absolute top-0.5 right-0.5 w-5 h-5 bg-primary-foreground rounded-full transition-transform shadow-sm" />
									</div>
								</div>
							</div>
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<Icon icon="solar:wallet-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Fine Alerts</span>
								</div>
								<div className="relative inline-block w-11 h-6">
									<input type="checkbox" checked className="sr-only peer" />
									<div className="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-focus:ring-offset-background transition-colors">
										<div className="absolute top-0.5 right-0.5 w-5 h-5 bg-primary-foreground rounded-full transition-transform shadow-sm" />
									</div>
								</div>
							</div>
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<Icon icon="solar:chat-dots-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Chat Messages</span>
								</div>
								<div className="relative inline-block w-11 h-6">
									<input type="checkbox" checked className="sr-only peer" />
									<div className="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-focus:ring-offset-background transition-colors">
										<div className="absolute top-0.5 right-0.5 w-5 h-5 bg-primary-foreground rounded-full transition-transform shadow-sm" />
									</div>
								</div>
							</div>
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<Icon
										icon="solar:chat-square-like-bold"
										className="size-5 text-muted-foreground"
									/>
									<span className="text-sm font-medium text-foreground">Discussion Replies</span>
								</div>
								<div className="relative inline-block w-11 h-6">
									<input type="checkbox" checked className="sr-only peer" />
									<div className="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-focus:ring-offset-background transition-colors">
										<div className="absolute top-0.5 right-0.5 w-5 h-5 bg-primary-foreground rounded-full transition-transform shadow-sm" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="flex items-center gap-2 mb-3 px-1">
							<Icon icon="solar:users-group-rounded-bold" className="size-5 text-primary" />
							<h2 className="text-base font-bold font-heading text-foreground uppercase tracking-wide">
								Group Settings
							</h2>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:settings-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Manage Groups</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:user-plus-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Invite Members</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:document-text-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Group Rules</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
						</div>
					</section>
					<section>
						<div className="flex items-center gap-2 mb-3 px-1">
							<Icon icon="solar:book-2-bold" className="size-5 text-primary" />
							<h2 className="text-base font-bold font-heading text-foreground uppercase tracking-wide">
								Reading Preferences
							</h2>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<Icon icon="solar:alarm-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Daily Reminders</span>
								</div>
								<div className="relative inline-block w-11 h-6">
									<input type="checkbox" checked className="sr-only peer" />
									<div className="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-focus:ring-offset-background transition-colors">
										<div className="absolute top-0.5 right-0.5 w-5 h-5 bg-primary-foreground rounded-full transition-transform shadow-sm" />
									</div>
								</div>
							</div>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:target-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Reading Goals</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:global-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Timezone</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-xs text-muted-foreground font-medium">EST</span>
									<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
								</div>
							</button>
						</div>
					</section>
					<section>
						<div className="flex items-center gap-2 mb-3 px-1">
							<Icon icon="solar:palette-bold" className="size-5 text-primary" />
							<h2 className="text-base font-bold font-heading text-foreground uppercase tracking-wide">
								Appearance
							</h2>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<Icon icon="solar:moon-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Dark Mode</span>
								</div>
								<div className="relative inline-block w-11 h-6">
									<input type="checkbox" className="sr-only peer" />
									<div className="w-11 h-6 bg-border rounded-full peer peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-focus:ring-offset-background transition-colors">
										<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-foreground rounded-full transition-transform shadow-sm" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="flex items-center gap-2 mb-3 px-1">
							<Icon icon="solar:wallet-bold" className="size-5 text-primary" />
							<h2 className="text-base font-bold font-heading text-foreground uppercase tracking-wide">
								Fine Settings
							</h2>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:card-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Payment Methods</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:dollar-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Fine Amounts</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-xs text-muted-foreground font-medium">$5.00</span>
									<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
								</div>
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:chart-2-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">
										Distribution Preferences
									</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:clock-circle-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Grace Periods</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="text-xs text-muted-foreground font-medium">24h</span>
									<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
								</div>
							</button>
							<div className="flex items-center justify-between p-4 bg-secondary/20">
								<div className="flex items-center gap-3">
									<Icon icon="solar:shield-user-bold" className="size-5 text-muted-foreground" />
									<span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
										Admin Only
									</span>
								</div>
							</div>
						</div>
					</section>
					<section className="pb-4">
						<div className="flex items-center gap-2 mb-3 px-1">
							<Icon icon="solar:info-circle-bold" className="size-5 text-primary" />
							<h2 className="text-base font-bold font-heading text-foreground uppercase tracking-wide">
								About
							</h2>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="flex items-center justify-between p-4">
								<div className="flex items-center gap-3">
									<Icon icon="solar:widget-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">App Version</span>
								</div>
								<span className="text-xs text-muted-foreground font-medium">2.4.1</span>
							</div>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:document-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Terms of Service</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:shield-check-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Privacy Policy</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon
										icon="solar:question-circle-bold"
										className="size-5 text-muted-foreground"
									/>
									<span className="text-sm font-medium text-foreground">Help & Support</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="flex items-center justify-between p-4 w-full hover:bg-secondary/30 transition-colors">
								<div className="flex items-center gap-3">
									<Icon icon="solar:book-bookmark-bold" className="size-5 text-muted-foreground" />
									<span className="text-sm font-medium text-foreground">Help & FAQ</span>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
						</div>
					</section>
					<section className="pb-4">
						<button className="w-full bg-destructive hover:bg-destructive/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
							<Icon icon="solar:logout-2-bold" className="size-5" />
							<span>Logout</span>
						</button>
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
