"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../lib/firebase";
import { toast } from "react-hot-toast";
import Link from "next/link";

import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";

import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { firestoreProfileSetup } from "@/utils/firestoreProileSetup";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); 
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, {
        displayName: firstname + " " + lastname,
      });
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
      firestoreProfileSetup(result.user);
      toast.success("Account created!");
      router.push('/');
    } catch (err) {
      toast.error(err.message);
    } finally {
    setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      firestoreProfileSetup(result.user);
      toast.success("Signed up with Google!");
      router.push('/');
    } catch (err) {
      toast.error(err.message);
    }finally {
    setLoading(false);
    }
  };

  const loginWithGithub = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, githubProvider);
      firestoreProfileSetup(result.user);
      toast.success("Signed up with GitHub!");
      router.push('/');
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  return (
    <div
      className="bg-neutral-950 h-screen flex items-center justify-center
    "
    >
      <div className="shadow-input mx-auto w-full max-w-md rounded-md p-4 md:rounded-2xl md:p-8 bg-neutral-800 hover:bg-neutral-700/60 border border-neutral-700">
        <h2 className="text-xl font-bold text-white dark:text-neutral-200">
          Registration
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-300">
          Register to join Electric Love
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input 
              id="firstname" 
              placeholder="Walter" 
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input 
              id="lastname" 
              placeholder="White" 
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)} />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="mangru@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-green-500 font-medium text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:bg-green-400 cursor-pointer"
            type="submit"
            disabled={loading}
          >
            Sign up →
            <BottomGradient />
          </button>

          <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <div className="flex justify-center space-y-4 gap-8">
            <div onClick={loginWithGoogle}>
              <SocialButton icon={<IconBrandGoogle />} loading={loading} text="Google" />
            </div>
            <div onClick={loginWithGithub}>
              <SocialButton icon={<IconBrandGithub />} loading={loading} text="GitHub" />
            </div>
          </div>
        </form>
        <p className="text-white font-light -mt-8">Already registered? <Link href="/login" className="underline font-semibold">Login</Link></p>
      </div>
    </div>
  );
};

// ---------------- COMPONENTS ------------------

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const SocialButton = ({ icon, text, loading }) => (
  <button
    className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
    type="button"
    disabled={loading}
  >
    <span className="h-4 w-4 text-neutral-800 dark:text-neutral-300">
      {icon}
    </span>
    <span className="text-sm text-neutral-700 dark:text-neutral-300">
      {text}
    </span>
    <BottomGradient />
  </button>
);

export default Register;
