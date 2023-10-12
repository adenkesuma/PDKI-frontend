import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import { TbX } from "react-icons/tb"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useTranslations } from "next-intl"

interface LoginProps {
  handleShowLogin: () => void
  setShow: (show: boolean) => void
}

const Login: FC<LoginProps> = ({ handleShowLogin, setShow }) => {
  const t = useTranslations("Login")
  const router = useRouter()
  const [loginBy, setLoginBy] = useState("admin")
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")

  const searchParams = useSearchParams();
  const callbackUrlAdmin = searchParams?.get("callbackUrl") || "/admin/dashboard";
  const callbackUrlMember = searchParams?.get("callbackUrl") || "/member/dashboard";

  useEffect(() => {
    loginBy === "admin" ? router.prefetch("/admin/dashboard") : router.prefetch("/member/dashboard")
  }, [router])


  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      setLoading(true);
      if (loginBy == "admin") {
        const res = await signIn("admin-login", {
          redirect: false,
          username: username,
          password: password,
          callbackUrlAdmin
        });

        if (!res?.error) {
          router.push(callbackUrlAdmin)
        } else {
          setError("Invalid username or password")
        }
      } else if (loginBy == "member") {
        const res = await signIn("member-login", {
          redirect: false,
          username: username,
          password: password,
          callbackUrlMember
        });

        setLoading(false)
        if (!res?.error) {
          router.push(callbackUrlMember)
        } else {
          setLoading(false)
          setError("Invalid username or password")
        }
      }
    } catch (err: any) {
      setError(err)
    }
  }
  return (
    <>
      <div className="mx-auto fixed left-0 right-0 bottom-0 top-0 h-[100vh] w-[100%] opacity-95 bg-[#274698] flex flex-col justify-center gap-12 items-center z-50">
        {/* back icon */}
        <div className="absolute top-8 right-8" onClick={handleShowLogin = () => setShow(false)}>
          <TbX className="w-[30px] h-[30px] text-blue-100" />
        </div>

        <div>
          <h2 className="text-[46px] text-blue-100 font-bold text-center">{t("header-text")}</h2>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-blue-100 font-medium text-[16px]">{t("login-as")}</p>
            <select
              defaultValue={"admin"}
              name="role"
              id="role"
              className="bg-blue-100 outline-none font-medium text-[#333] py-[6px] px-3 rounded-xl"
              onChange={(e) => {
                setLoginBy(e.target.value);
              }}
            >
              <option value="admin" className="p-2 rounded-md">Admin</option>
              <option value="member" className="p-2 rounded-md">Member</option>
            </select>
          </div>
        </div>
        {error && (
          <p className="text-center bg-red-300 mb-6 rounded-lg py-2 px-4 font-medium text-red-800">{error}</p>
        )}
        <form className="flex flex-col items-center gap-8 mx-auto w-[80%] md:w-[60%] lg:w-[40%]"
          onSubmit={onSubmit}
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder={t("username")}
            className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={t("password")}
            className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" />
          <button
            type="submit"
            className="bg-blue-100 hover:bg-blue-300 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl">
            {t("button-text")}
          </button>
        </form >
        <div className="w-[90%] md:w-[60%] lg:w-[50%]">
          <p className="text-center text-blue-100">
            {t("description")}
          </p>
        </div>
      </div>
    </>
  )
}

export default Login