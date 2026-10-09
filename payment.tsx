import { Icon } from "@iconify/react";

export function Payment() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="p-2 -ml-2">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<h1 className="text-lg font-bold font-heading text-primary tracking-tight">Payment</h1>
				<div className="w-10" />
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<section>
						<div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 text-center">
							<p className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">
								Outstanding Balance
							</p>
							<h2 className="text-5xl font-bold font-heading text-destructive mb-1">$45.00</h2>
							<p className="text-xs text-muted-foreground">3 missed readings</p>
						</div>
					</section>
					<section>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-lg font-bold font-heading text-foreground">Payment History</h2>
							<button className="text-xs font-bold text-primary underline underline-offset-2">
								View All
							</button>
						</div>
						<div className="bg-card rounded-xl shadow-sm border border-border divide-y divide-border">
							<div className="p-4">
								<div className="flex items-start justify-between mb-2">
									<div className="flex items-start gap-3">
										<div className="bg-destructive/10 p-2 rounded-lg">
											<Icon icon="solar:card-bold" className="size-5 text-destructive" />
										</div>
										<div>
											<p className="text-sm font-bold text-foreground">Fine Payment</p>
											<p className="text-xs text-muted-foreground mt-0.5">Oct 18, 2024</p>
										</div>
									</div>
									<span className="text-sm font-bold text-destructive">-$15.00</span>
								</div>
								<p className="text-xs text-muted-foreground pl-11">
									Missed: "Atomic Habits" - Day 15
								</p>
							</div>
							<div className="p-4">
								<div className="flex items-start justify-between mb-2">
									<div className="flex items-start gap-3">
										<div className="bg-destructive/10 p-2 rounded-lg">
											<Icon icon="solar:card-bold" className="size-5 text-destructive" />
										</div>
										<div>
											<p className="text-sm font-bold text-foreground">Fine Payment</p>
											<p className="text-xs text-muted-foreground mt-0.5">Oct 12, 2024</p>
										</div>
									</div>
									<span className="text-sm font-bold text-destructive">-$10.00</span>
								</div>
								<p className="text-xs text-muted-foreground pl-11">Missed: "Deep Work" - Day 22</p>
							</div>
							<div className="p-4">
								<div className="flex items-start justify-between mb-2">
									<div className="flex items-start gap-3">
										<div className="bg-destructive/10 p-2 rounded-lg">
											<Icon icon="solar:card-bold" className="size-5 text-destructive" />
										</div>
										<div>
											<p className="text-sm font-bold text-foreground">Fine Payment</p>
											<p className="text-xs text-muted-foreground mt-0.5">Oct 5, 2024</p>
										</div>
									</div>
									<span className="text-sm font-bold text-destructive">-$20.00</span>
								</div>
								<p className="text-xs text-muted-foreground pl-11">
									Missed: "The Disciplined Life" - Day 8
								</p>
							</div>
						</div>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">Payment Methods</h2>
						<div className="space-y-3">
							<button className="w-full bg-card rounded-xl p-4 shadow-sm border border-border flex items-center justify-between active:scale-[0.98] transition-transform">
								<div className="flex items-center gap-3">
									<div className="bg-primary/10 p-2 rounded-lg">
										<Icon icon="solar:card-bold" className="size-6 text-primary" />
									</div>
									<div className="text-left">
										<p className="text-sm font-bold text-foreground">Credit Card</p>
										<p className="text-xs text-muted-foreground">Visa •••• 4242</p>
									</div>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="w-full bg-card rounded-xl p-4 shadow-sm border border-border flex items-center justify-between active:scale-[0.98] transition-transform">
								<div className="flex items-center gap-3">
									<div className="bg-primary/10 p-2 rounded-lg">
										<Icon icon="solar:wallet-bold" className="size-6 text-primary" />
									</div>
									<div className="text-left">
										<p className="text-sm font-bold text-foreground">Bank Transfer</p>
										<p className="text-xs text-muted-foreground">Direct bank payment</p>
									</div>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
							<button className="w-full bg-card rounded-xl p-4 shadow-sm border border-border flex items-center justify-between active:scale-[0.98] transition-transform">
								<div className="flex items-center gap-3">
									<div className="bg-primary/10 p-2 rounded-lg">
										<Icon icon="solar:smartphone-2-bold" className="size-6 text-primary" />
									</div>
									<div className="text-left">
										<p className="text-sm font-bold text-foreground">Mobile Money</p>
										<p className="text-xs text-muted-foreground">Pay via mobile wallet</p>
									</div>
								</div>
								<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
							</button>
						</div>
						<button className="w-full bg-card rounded-xl p-4 shadow-sm border border-border flex items-center justify-between active:scale-[0.98] transition-transform">
							<div className="flex items-center gap-3">
								<div className="bg-primary/10 p-2 rounded-lg">
									<Icon icon="mdi:paypal" className="size-6 text-primary" />
								</div>
								<div className="text-left">
									<p className="text-sm font-bold text-foreground">PayPal</p>
									<p className="text-xs text-muted-foreground">Pay with PayPal account</p>
								</div>
							</div>
							<Icon icon="solar:arrow-right-linear" className="size-5 text-muted-foreground" />
						</button>
					</section>
					<section>
						<h2 className="text-lg font-bold font-heading text-foreground mb-3">
							Transfer Details
						</h2>
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border space-y-3">
							<div className="flex items-center gap-3 pb-3 border-b border-border">
								<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
									<Icon icon="solar:wallet-money-bold" className="size-6 text-primary" />
								</div>
								<div className="flex-1">
									<p className="text-xs text-muted-foreground mb-0.5">Beneficiary</p>
									<p className="text-sm font-bold text-foreground">Iron & Ink Book Club</p>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-xs text-muted-foreground mb-1">Account Number</p>
									<p className="text-sm font-bold text-foreground">4847-2948-1847</p>
								</div>
								<div>
									<p className="text-xs text-muted-foreground mb-1">Bank Name</p>
									<p className="text-sm font-bold text-foreground">Trust Bank</p>
								</div>
							</div>
							<div className="pt-2 border-t border-border">
								<p className="text-xs text-muted-foreground leading-relaxed">
									All fine payments go to the book club's shared fund, which is used for monthly
									meetup expenses and book purchases.
								</p>
							</div>
						</div>
					</section>
					<section>
						<div className="bg-card rounded-xl p-4 shadow-sm border border-border">
							<div className="flex items-start gap-3">
								<input
									type="checkbox"
									className="mt-0.5 size-5 rounded border-2 border-border accent-primary"
								/>
								<div className="flex-1">
									<p className="text-sm font-bold text-foreground mb-1">
										Enable Automatic Payments
									</p>
									<p className="text-xs text-muted-foreground leading-relaxed">
										Automatically pay fines when they occur. You'll receive a notification after
										each payment.
									</p>
								</div>
							</div>
						</div>
					</section>
					<div className="pt-2">
						<button className="w-full py-4 bg-primary text-primary-foreground text-base font-bold rounded-xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
							<Icon icon="solar:card-send-bold" className="size-6" />
							Pay Now - $45.00
						</button>
					</div>
					<div className="px-5 pb-6">
						<button className="w-full py-3 bg-card text-foreground text-sm font-bold rounded-xl border border-border active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
							<Icon icon="solar:download-bold" className="size-5" />
							Download Receipt
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
