import { Input } from "@nextui-org/react";
import { FC, ReactNode  ,FormHTMLAttributes} from "react";
import AuthSubmitButton from "./AuthSubmitButton";
import Link from "next/link";

interface Props {
  error?: string;
  btnLabel: string;
  title?: string;
  children: ReactNode;
  footerItems?: { label: string; linkText: string; link: string }[];
  action?: FormHTMLAttributes<HTMLFormElement> ['action'];
}

const AuthForm: FC<Props> = ({
  title,
  btnLabel,
  error,
  children,
  footerItems,action,
}) => {
  return (
    <div className="space-y-6 max-w-96 mx-auto pt-20 sm:p-0 p-4">
      <form  action={action} className="space-y-4">
        <h1 className="text-2xl">{title}</h1>
        <div>{error ? <p className="text-red-500">{error}</p> : null}</div>
        {children}
        <div>
          <AuthSubmitButton label={btnLabel} />
        </div>
      </form>

      <div className="relative h-0.5 bg-white">
        <span className="w-6 h-6 flex items-center justify-center text-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-black">
          or
        </span>
      </div>

      <form>
        <AuthSubmitButton label="Continue With Google" />
      </form>

      <div className="space-y-2">
        {footerItems?.map((item, index) => {
          return (
            <div key={index} className="flex items-center space-x-3">
              <span className="font-semibold">{item.label}:</span>
              <Link className="hover:underline" href={item.link}>
                {item.linkText}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthForm;
