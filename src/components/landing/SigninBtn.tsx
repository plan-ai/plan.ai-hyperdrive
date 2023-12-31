import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { GithubOutlineIcon } from "@/components/icons/github-outline";

interface SigninBtnProps {}

export const SigninBtn: React.FC<SigninBtnProps> = ({}) => {
    const router = useRouter();
    const { data: session } = useSession();
    return (
        <div
            onClick={() => {
                //@ts-ignore
                if (session?.provider === "github") {
                    router.push("/create-tasks");
                } else {
                    signIn("github", {
                        callbackUrl: `${window.location.origin}/create-tasks`,
                    });
                }
            }}
            className="group relative flex items-center justify-center">
            <div className="absolute z-[20] flex cursor-pointer items-center justify-start gap-3 whitespace-nowrap rounded-full bg-[#0a0a0a] px-[12px] py-2 text-xs transition-all duration-300 xl:px-[16px] xl:py-2.5 xl:text-sm 3xl:px-[18px] 3xl:py-3 3xl:text-base">
                <GithubOutlineIcon />
                <div className="flex w-11 items-center gap-5 overflow-hidden transition-all duration-300 group-hover:w-20 xl:w-12 xl:gap-4 xl:group-hover:w-24 3xl:w-14 3xl:gap-3.5 3xl:group-hover:w-28">
                    <div className="transition-all duration-300 group-hover:-translate-x-13">Sign in</div>
                    <div className="transition-all duration-300 group-hover:-translate-x-13">with Github</div>
                </div>
                <ArrowRightIcon className="h-3.5 xl:h-4 3xl:h-5" />
            </div>
            <div className="absolute z-[10] flex items-center justify-start gap-3 whitespace-nowrap rounded-full bg-gradient-to-r from-[#FE9A3E] to-[#6BAE63] px-[12px] py-2 text-xs blur-[16px] transition-all duration-300 xl:px-[16px] xl:py-2.5 xl:text-sm 3xl:px-[18px] 3xl:py-3 3xl:text-base">
                <GithubOutlineIcon />
                <div className="flex w-11 items-center gap-5 overflow-hidden transition-all duration-300 group-hover:w-20 xl:w-12 xl:gap-4 xl:group-hover:w-24 3xl:w-14 3xl:gap-3.5 3xl:group-hover:w-28">
                    <div className="transition-all duration-300 group-hover:-translate-x-13">Sign in</div>
                    <div className="transition-all duration-300 group-hover:-translate-x-13">with Github</div>
                </div>
                <ArrowRightIcon className="h-3.5 xl:h-4 3xl:h-5" />
            </div>
        </div>
    );
};

export default SigninBtn;
