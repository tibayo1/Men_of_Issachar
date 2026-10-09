import { Icon } from "@iconify/react";

export function EmptyDiscussion() {
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
			<main className="flex-1 overflow-y-auto pb-24 flex items-center justify-center">
				<div className="flex flex-col items-center justify-center px-8 py-12 text-center max-w-sm">
					<div className="mb-8 relative">
						<div className="size-48 mx-auto mb-4 relative">
							<div className="absolute inset-0 bg-secondary/30 rounded-full" />
							<div className="absolute top-8 left-8 size-20 bg-card rounded-2xl shadow-md border border-border flex items-center justify-center transform -rotate-12">
								<Icon icon="solar:book-2-bold" className="size-10 text-primary" />
							</div>
							<div className="absolute top-12 right-8 size-16 bg-card rounded-2xl shadow-md border border-border flex items-center justify-center transform rotate-12">
								<Icon icon="solar:chat-round-dots-bold" className="size-8 text-primary" />
							</div>
							<div className="absolute bottom-6 left-1/2 -translate-x-1/2 size-14 bg-card rounded-2xl shadow-md border border-border flex items-center justify-center">
								<Icon icon="solar:book-bookmark-bold" className="size-7 text-primary" />
							</div>
							<div className="absolute top-4 right-4 size-10 bg-primary/10 rounded-full flex items-center justify-center">
								<Icon icon="solar:chat-line-bold" className="size-5 text-primary" />
							</div>
							<div className="absolute bottom-12 left-4 size-8 bg-primary/10 rounded-full flex items-center justify-center">
								<Icon icon="solar:chat-line-bold" className="size-4 text-primary" />
							</div>
						</div>
					</div>
					<h2 className="text-2xl font-bold font-heading text-foreground mb-3">
						No Discussions Yet
					</h2>
					<p className="text-base text-muted-foreground leading-relaxed mb-8">
						Be the first to start a conversation about your readings
					</p>
					<button className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl font-bold text-base shadow-sm active:scale-95 transition-transform">
						Start Discussion
					</button>
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
