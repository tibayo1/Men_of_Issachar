import { Icon } from "@iconify/react";

export function Registration() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-background sticky top-0 z-20 border-b border-border/40 backdrop-blur-md">
				<button className="flex items-center justify-center size-11">
					<Icon icon="solar:arrow-left-linear" className="size-6 text-foreground" />
				</button>
				<h1 className="text-lg font-bold font-heading text-primary tracking-tight">New Member</h1>
				<div className="size-11" />
			</header>
			<main className="flex-1 overflow-y-auto pb-24">
				<div className="p-5 space-y-6">
					<div className="text-center pt-2 pb-4">
						<div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
							<Icon icon="solar:users-group-rounded-bold" className="size-8 text-primary" />
						</div>
						<h2 className="text-2xl font-bold font-heading text-foreground mb-2">
							Join Our Reading Group
						</h2>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
							We're excited to have you join our community of dedicated readers. Please complete
							your profile below.
						</p>
					</div>
					<div className="space-y-5">
						<div>
							<label className="block text-sm font-bold text-foreground mb-2">
								Full Name <span className="text-destructive">*</span>
							</label>
							<input
								type="text"
								required
								className="w-full px-4 py-3 rounded-xl bg-input text-foreground placeholder:text-muted-foreground border border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
								placeholder="Enter your full name"
							/>
							<p className="text-xs text-destructive mt-1.5 hidden">Please enter your full name</p>
						</div>
						<div>
							<label className="block text-sm font-bold text-foreground mb-2">
								Email Address <span className="text-destructive">*</span>
							</label>
							<input
								type="email"
								required
								className="w-full px-4 py-3 rounded-xl bg-input text-foreground placeholder:text-muted-foreground border border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
								placeholder="your.email@example.com"
							/>
							<p className="text-xs text-destructive mt-1.5 hidden">
								Please enter a valid email address
							</p>
						</div>
						<div>
							<label className="block text-sm font-bold text-foreground mb-2">
								Phone Number <span className="text-destructive">*</span>
							</label>
							<input
								type="tel"
								required
								className="w-full px-4 py-3 rounded-xl bg-input text-foreground placeholder:text-muted-foreground border border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
								placeholder="(555) 123-4567"
							/>
							<p className="text-xs text-destructive mt-1.5 hidden">
								Please enter a valid phone number
							</p>
						</div>
						<div>
							<label className="block text-sm font-bold text-foreground mb-2">Profile Photo</label>
							<div className="bg-card border border-border rounded-xl p-4">
								<div className="flex items-center gap-4">
									<div className="size-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
										<Icon icon="solar:user-bold" className="size-8 text-muted-foreground" />
									</div>
									<div className="flex-1">
										<button className="w-full py-2.5 px-4 bg-secondary text-secondary-foreground rounded-lg text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
											<Icon icon="solar:camera-add-bold" className="size-5" />
											Upload Photo
										</button>
										<p className="text-xs text-muted-foreground mt-2">JPG, PNG or GIF (max 5MB)</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<label className="block text-sm font-bold text-foreground mb-2">
								Brief Introduction <span className="text-destructive">*</span>
							</label>
							<p className="text-xs text-muted-foreground mb-2">
								Tell us about your reading interests and what you hope to gain from the group
							</p>
							<textarea
								rows="5"
								required
								className="w-full px-4 py-3 rounded-xl bg-input text-foreground placeholder:text-muted-foreground border border-transparent focus:outline-none focus:ring-2 focus:ring-ring resize-none"
								placeholder="I enjoy reading fiction and non-fiction books about personal development. I'm looking forward to..."
							/>
							<p className="text-xs text-destructive mt-1.5 hidden">
								Please provide a brief introduction (minimum 20 characters)
							</p>
						</div>
						<div className="bg-muted/50 border border-border rounded-xl p-4">
							<label className="flex items-start gap-3 cursor-pointer">
								<div className="flex items-center h-6">
									<div className="size-5 rounded border-2 border-primary bg-background flex items-center justify-center shrink-0">
										<Icon icon="solar:check-circle-bold" className="size-4 text-primary" />
									</div>
								</div>
								<div className="flex-1">
									<p className="text-sm text-foreground leading-relaxed">
										I agree to the{" "}
										<span className="font-bold text-primary underline underline-offset-2">
											Terms and Conditions
										</span>{" "}
										and understand the group accountability rules, including fines for missed
										readings. <span className="text-destructive">*</span>
									</p>
								</div>
							</label>
							<p className="text-xs text-destructive mt-1.5 ml-8 hidden">
								You must agree to the terms and conditions
							</p>
						</div>
						<div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-start gap-3">
							<div className="bg-primary text-primary-foreground p-2 rounded-lg shrink-0">
								<Icon icon="solar:info-circle-bold" className="size-5" />
							</div>
							<div>
								<h3 className="font-bold text-sm text-foreground mb-0.5">What to Expect</h3>
								<p className="text-xs text-muted-foreground leading-relaxed">
									After registration, you'll receive an email with access to our current reading
									schedule and group chat. Monthly dues are $10 and go toward book purchases.
								</p>
							</div>
						</div>
						<button className="w-full py-4 bg-primary text-primary-foreground text-base font-bold rounded-xl shadow-sm active:scale-[0.98] transition-transform mt-6">
							Complete Registration
						</button>
						<p className="text-xs text-center text-muted-foreground px-4 pb-2">
							By registering, you'll be added to our community chat and receive notifications about
							upcoming meetings and book selections.
						</p>
						<div className="text-center pt-2 pb-4">
							<p className="text-sm text-muted-foreground">
								Already have an account?{" "}
								<button className="text-primary font-bold underline underline-offset-2">
									Login
								</button>
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
