import { Icon } from "@iconify/react";

export function EmptyChat() {
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
			<main className="flex-1 overflow-y-auto px-4 py-4 pb-24 flex items-center justify-center">
				<div className="flex flex-col items-center justify-center text-center max-w-xs mx-auto space-y-6">
					<div className="relative w-48 h-48 flex items-center justify-center">
						<div className="absolute inset-0 bg-secondary/30 rounded-full" />
						<div className="absolute inset-8 bg-secondary/50 rounded-full" />
						<div className="absolute inset-16 bg-secondary/70 rounded-full flex items-center justify-center">
							<div className="flex items-center gap-1">
								<div className="size-8 rounded-full bg-primary/20 flex items-center justify-center -ml-2">
									<Icon icon="solar:user-bold" className="size-4 text-primary" />
								</div>
								<div className="size-8 rounded-full bg-primary/20 flex items-center justify-center -ml-2">
									<Icon icon="solar:user-bold" className="size-4 text-primary" />
								</div>
								<div className="size-8 rounded-full bg-primary/20 flex items-center justify-center -ml-2">
									<Icon icon="solar:user-bold" className="size-4 text-primary" />
								</div>
							</div>
						</div>
						<div className="absolute top-12 right-12 bg-card border border-border rounded-2xl rounded-tr-sm p-3 shadow-sm rotate-12 w-24">
							<div className="h-2 bg-muted rounded w-full mb-1.5" />
							<div className="h-2 bg-muted rounded w-3/4" />
						</div>
						<div className="absolute bottom-16 left-8 bg-card border border-border rounded-2xl rounded-tl-sm p-3 shadow-sm -rotate-6 w-28">
							<div className="h-2 bg-muted rounded w-full mb-1.5" />
							<div className="h-2 bg-muted rounded w-2/3" />
						</div>
					</div>
					<div className="space-y-3">
						<h2 className="text-2xl font-bold font-heading text-foreground">No Messages Yet</h2>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Start the conversation with your book club members
						</p>
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
