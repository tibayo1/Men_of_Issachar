import { Icon } from "@iconify/react";

export function FinesAccountability() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="p-2 -ml-2 hover:bg-secondary rounded-full transition-colors">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<div className="flex-1 text-center">
					<h1 className="text-xl font-bold font-heading text-primary tracking-tight">The Ledger</h1>
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
						Accountability
					</p>
				</div>
				<div className="flex gap-2">
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
					<section className="grid grid-cols-2 gap-3">
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
							<div className="flex items-center gap-2 mb-2">
								<div className="p-1.5 bg-destructive/10 rounded-lg">
									<Icon icon="solar:wallet-bold" className="size-4 text-destructive" />
								</div>
								<span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
									Total Fines
								</span>
							</div>
							<p className="text-2xl font-bold font-heading text-foreground">$127.50</p>
							<p className="text-xs text-muted-foreground mt-1">Collected this month</p>
						</div>
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
							<div className="flex items-center gap-2 mb-2">
								<div className="p-1.5 bg-emerald-100 rounded-lg">
									<Icon icon="solar:check-circle-bold" className="size-4 text-emerald-600" />
								</div>
								<span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
									Your Status
								</span>
							</div>
							<p className="text-xl font-bold font-heading text-emerald-600">Compliant</p>
							<p className="text-xs text-muted-foreground mt-1">All caught up!</p>
						</div>
					</section>
					<section>
						<div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
							<div className="flex items-start gap-3">
								<div className="bg-primary text-primary-foreground p-2 rounded-lg shrink-0">
									<Icon icon="solar:hand-heart-bold" className="size-5" />
								</div>
								<div className="flex-1">
									<h3 className="font-bold text-sm text-foreground mb-1">Fines Transfer To</h3>
									<p className="text-xs text-muted-foreground leading-relaxed mb-2">
										All collected fines are donated to{" "}
										<span className="font-semibold text-foreground">Read for Kids Foundation</span>
									</p>
									<div className="flex items-center justify-between pt-2 border-t border-primary/10">
										<span className="text-xs font-medium text-muted-foreground">Total Donated</span>
										<span className="text-sm font-bold text-primary">$127.50</span>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
							<button className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors">
								<div className="flex items-center gap-3">
									<div className="p-2 bg-primary/10 rounded-lg">
										<Icon icon="solar:bill-list-bold" className="size-5 text-primary" />
									</div>
									<div className="text-left">
										<h3 className="text-sm font-bold text-foreground">Fine Breakdown</h3>
										<p className="text-xs text-muted-foreground">View detailed member fines</p>
									</div>
								</div>
								<Icon icon="solar:alt-arrow-down-linear" className="size-5 text-muted-foreground" />
							</button>
						</div>
					</section>
					<section>
						<div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5">
							<button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold whitespace-nowrap shadow-sm">
								All Members
							</button>
							<button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold whitespace-nowrap">
								Pending Fines
							</button>
							<button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold whitespace-nowrap">
								Paid
							</button>
						</div>
					</section>
					<section>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-lg font-bold font-heading text-foreground">
								Member Accountability
							</h2>
							<span className="text-xs font-medium text-muted-foreground">8 members</span>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/32.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">You (Marcus T.)</p>
										<p className="text-xs text-muted-foreground">Perfect attendance</p>
									</div>
									<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
										<Icon icon="solar:check-circle-bold" className="size-4" />
										<span className="text-xs font-bold">Clear</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">0</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-foreground">$0.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-emerald-600">Paid</p>
									</div>
								</div>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/44.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">David R.</p>
										<p className="text-xs text-muted-foreground">1 day missed</p>
									</div>
									<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
										<Icon icon="solar:check-circle-bold" className="size-4" />
										<span className="text-xs font-bold">Clear</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">1</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-foreground">$0.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-emerald-600">Paid</p>
									</div>
								</div>
							</div>
							<div className="p-4 bg-destructive/5">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/22.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">James L.</p>
										<p className="text-xs text-destructive font-medium">Payment pending</p>
									</div>
									<div className="flex items-center gap-1.5 text-destructive bg-white px-2.5 py-1.5 rounded-lg border border-destructive/20 shadow-sm">
										<Icon icon="solar:danger-triangle-bold" className="size-4" />
										<span className="text-xs font-bold">Owing</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15 mb-3">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">3</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-destructive">$15.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-destructive">Pending</p>
									</div>
								</div>
								<button className="w-full py-2.5 bg-destructive text-white text-sm font-bold rounded-lg shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
									<Icon icon="solar:wallet-bold" className="size-4" />
									<span>Pay Fine ($15.00)</span>
								</button>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/67.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">Samuel K.</p>
										<p className="text-xs text-muted-foreground">Perfect attendance</p>
									</div>
									<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
										<Icon icon="solar:check-circle-bold" className="size-4" />
										<span className="text-xs font-bold">Clear</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">0</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-foreground">$0.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-emerald-600">Paid</p>
									</div>
								</div>
							</div>
							<div className="p-4 bg-destructive/5">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/86.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">Brandon M.</p>
										<p className="text-xs text-destructive font-medium">Payment pending</p>
									</div>
									<div className="flex items-center gap-1.5 text-destructive bg-white px-2.5 py-1.5 rounded-lg border border-destructive/20 shadow-sm">
										<Icon icon="solar:danger-triangle-bold" className="size-4" />
										<span className="text-xs font-bold">Owing</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15 mb-3">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">5</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-destructive">$25.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-destructive">Pending</p>
									</div>
								</div>
								<button className="w-full py-2.5 bg-destructive text-white text-sm font-bold rounded-lg shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
									<Icon icon="solar:wallet-bold" className="size-4" />
									<span>Pay Fine ($25.00)</span>
								</button>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/58.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">Tyler J.</p>
										<p className="text-xs text-muted-foreground">2 days missed</p>
									</div>
									<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
										<Icon icon="solar:check-circle-bold" className="size-4" />
										<span className="text-xs font-bold">Clear</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">2</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-foreground">$0.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-emerald-600">Paid</p>
									</div>
								</div>
							</div>
							<div className="p-4 bg-destructive/5">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/75.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">Chris P.</p>
										<p className="text-xs text-destructive font-medium">Payment pending</p>
									</div>
									<div className="flex items-center gap-1.5 text-destructive bg-white px-2.5 py-1.5 rounded-lg border border-destructive/20 shadow-sm">
										<Icon icon="solar:danger-triangle-bold" className="size-4" />
										<span className="text-xs font-bold">Owing</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15 mb-3">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">4</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-destructive">$20.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-destructive">Pending</p>
									</div>
								</div>
								<button className="w-full py-2.5 bg-destructive text-white text-sm font-bold rounded-lg shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
									<Icon icon="solar:wallet-bold" className="size-4" />
									<span>Pay Fine ($20.00)</span>
								</button>
							</div>
							<div className="p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="size-12 rounded-full overflow-hidden relative shrink-0">
										<img
											alt="Member"
											src="https://randomuser.me/api/portraits/men/91.jpg"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-foreground">Eric W.</p>
										<p className="text-xs text-muted-foreground">1 day missed</p>
									</div>
									<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
										<Icon icon="solar:check-circle-bold" className="size-4" />
										<span className="text-xs font-bold">Clear</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-3 pl-15">
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Days Missed</p>
										<p className="text-sm font-bold text-foreground">1</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Fine Owed</p>
										<p className="text-sm font-bold text-foreground">$0.00</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground mb-0.5">Status</p>
										<p className="text-sm font-bold text-emerald-600">Paid</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-sm shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
							<Icon icon="solar:history-bold" className="size-5" />
							<span>View Payment History</span>
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
