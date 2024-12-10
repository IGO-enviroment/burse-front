import { Box, Button, Icon, Link, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RoutePaths } from "../../../app/config/route/config"
import { LoginFeature } from "@/feature/auth-by-email"
import { UserFeature } from "@/entities/user"
import { useDispatch } from "../../../shared/lib/redux"

export function LoginPage() {
  const isLoading = useSelector(LoginFeature.selectors.isFetching)
  const isUserLogged = useSelector(UserFeature.selectors.data)
  const error = useSelector(LoginFeature.selectors.error)
  const dispatch = useDispatch()

  const { control, watch } = useForm({
    values: {
      email: "",
      password: "",
    },
  })

  const onSubmit = () => {
    dispatch(
      LoginFeature.thunk.loginByEmail({
        email: watch("email"),
        password: watch("password"),
      })
    )
  }

  console.log("isUserLogged", isUserLogged, "dsfd");
  if (isUserLogged) {
    return <Navigate to={RoutePaths.main} replace />
  }

  return (
    <Box
      style={{
        backgroundColor: "#E8F1FF"
      }}
    >
      <Box
        style={{
          minWidth: "600px",
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translate(-50%, 20%)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 48,
          paddingBottom: 12,
          paddingTop: 12,
          borderRadius: 24
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon style={{ height: 48, width: 48 }}>
            <img src="/logo.svg"></img>
          </Icon>
        </Box>
        <Typography
          variant="h4"
          sx={{
            color: "#101828",
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28.8px",
            textAlign: "center"
          }}
        >
          Авторизация
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "stretch",
            gap: 2,
            width: 1,
          }}
        >
          <Controller
            control={control}
            name={"email"}
            render={({ field: { value, onChange } }) => (
              <TextField
                sx={{ flexGrow: 1, width: 1, borderRadius: 12 }}
                label="Почта"
                value={value}
                onChange={(event) => {
                  onChange(event.target.value)
                  // dispatch(LoginFeature.actions.resetError("email"))
                }}
                // error={Boolean(error?.email)}
                // helperText={error?.email}
              />
            )}
          />
          <Controller
            control={control}
            name={"password"}
            render={({ field: { value, onChange } }) => (
              <TextField
                sx={{ flexGrow: 1, width: 1, borderRadius: 12 }}
                label="Пароль"
                value={value}
                type="password"
                // error={Boolean(error?.password)}
                // helperText={error?.password}
                onChange={(event) => {
                  onChange(event.target.value)
                  // dispatch(LoginFeature.actions.resetError("password"))
                }}
              />
            )}
          />
          <Button
            disabled={isLoading}
            onClick={onSubmit}
            sx={{ width: 1, mt: 2 }}
            variant="outlined"
            style={{
              backgroundColor: "#0066FF",
              color: "white",
              borderRadius: "12px",
              paddingBottom: "12px",
              paddingTop: "12px",
            }}
          >
            Войти
          </Button>
          <Typography
            sx={{ textAlign: "center", maxWidth: "450px", mt: "-12px" }}
            variant="subtitle2"
            color={"textDisabled"}
          >
            Забыли почту или пароль? <Link href={""}>Восстановить</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
