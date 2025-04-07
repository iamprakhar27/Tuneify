import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import SignInOAuthButton from "./SignInOAuthButton";

const Topbar = () => {
	const { isAdmin } = useAuthStore();
	console.log({ isAdmin });

	return (
		<div className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10'>
			<div className='flex gap-2 items-center font-bold'>
				<img src='/tuneify1.png' className='size-10' alt='Spotify logo' />
				Tuneify
			</div>
			<div className='flex items-center gap-4'>
				{isAdmin && (
					<Link to={"/admin"} className={cn(buttonVariants({ variant: "outline" }))}>
						<LayoutDashboardIcon className='size-4  mr-2' />
						Admin Dashboard
					</Link>
				)}

				<SignedOut>
					<SignInOAuthButton />
				</SignedOut>

				<UserButton />
			</div>
		</div>
	);
};
export default Topbar;