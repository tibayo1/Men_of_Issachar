import { Icon } from "@iconify/react";

export function Onboarding() {
	return (
		<div className="flex flex-col h-full bg-background font-sans text-foreground">
			<div className="flex items-center justify-between px-5 pt-12 pb-4">
				<div className="size-11" />
				<button className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
					Skip
				</button>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
				<div className="w-full max-w-sm">
					<div className="aspect-square w-full mb-8 flex items-center justify-center">
						<div className="relative w-64 h-64">
							<div className="absolute inset-0 bg-primary/5 rounded-full" />
							<div className="absolute inset-8 bg-primary/10 rounded-full flex items-center justify-center">
								<Icon icon="solar:book-2-bold" className="size-32 text-primary" />
							</div>
						</div>
					</div>
					<div className="text-center space-y-3 mb-12">
						<h1 className="text-3xl font-bold font-heading text-primary leading-tight">
							Welcome to Iron & Ink
						</h1>
						<p className="text-base text-muted-foreground leading-relaxed px-4">
							Join a community of readers who hold each other accountable and grow together through
							shared literature.
						</p>
					</div>
					<div className="flex items-center justify-center gap-2 mb-8">
						<div className="size-2 bg-primary rounded-full" />
						<div className="size-2 bg-secondary rounded-full" />
						<div className="size-2 bg-secondary rounded-full" />
						<div className="size-2 bg-secondary rounded-full" />
					</div>
					<button className="w-full py-4 bg-primary text-primary-foreground text-base font-bold rounded-xl shadow-sm active:scale-[0.98] transition-transform">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
