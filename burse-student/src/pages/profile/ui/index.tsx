import {
  Box,
  Button,
  Chip,
  ListItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded"
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded"
import LockRoundedIcon from "@mui/icons-material/LockRounded"
import { useForm } from "react-hook-form"
import AddIcon from "@mui/icons-material/Add"

export function ProfilePage() {
  const { watch, register, resetField, setValue } = useForm({
    defaultValues: {
      about: "",
      competencies: ["React", "Angular", "Vue", "English B2"],
      "competencies-input": "",
    },
  })

  return (
    <Box>
      <Typography>Общая информация</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            sx={{ flexGrow: 1 }}
            disabled
            label="Имя"
            value={"Дмитрий"}
          />
          <TextField
            sx={{ flexGrow: 1 }}
            disabled
            label="Отчество"
            value={"Сергеевич"}
          />
          <TextField
            sx={{ flexGrow: 1 }}
            disabled
            label="Фамилия"
            value={"Овечкин"}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ToggleButtonGroup disabled>
            <ToggleButton selected value="муж">
              Муж
            </ToggleButton>
            <ToggleButton value="жен">Жен</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Typography sx={{ mt: 2 }}>Контактные данные</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            slotProps={{
              input: {
                startAdornment: <LocalPhoneRoundedIcon />,
              },
            }}
            sx={{ flexGrow: 1 }}
            disabled
            label="Почта"
            value={"+792789898989"}
          />
          <TextField
            slotProps={{
              input: {
                startAdornment: <AlternateEmailRoundedIcon />,
              },
            }}
            sx={{ flexGrow: 1 }}
            disabled
            label="Телефон"
            value={"ove@mail.ru"}
          />
        </Box>
      </Box>

      <Typography sx={{ mt: 2 }}>О себе</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <TextField multiline label="О себе" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {watch("competencies").map((label) => (
                <ListItem sx={{ flexGrow: 0, width: "auto", padding: 0 }}>
                  <Chip
                    label={label}
                    onDelete={() => {
                      setValue(
                        "competencies",
                        watch("competencies").filter((item) => item !== label),
                      )
                    }}
                  />
                </ListItem>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <TextField
                sx={{ mt: 1, flexGrow: 1 }}
                placeholder="Добавьте навык, например HTML"
                {...register("competencies-input")}
              />
              <Button
                disabled={watch("competencies-input").length < 2}
                color="success"
                variant="outlined"
                onClick={() => {
                  setValue("competencies", [
                    ...watch("competencies"),
                    watch("competencies-input"),
                  ])
                  resetField("competencies-input")
                }}
              >
                <AddIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography>Пароль</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            label="Пароль"
            slotProps={{ input: { startAdornment: <LockRoundedIcon /> } }}
          />
          <TextField
            label="Подтвердите пароль"
            slotProps={{ input: { startAdornment: <LockRoundedIcon /> } }}
          />
        </Box>
      </Box>
    </Box>
  )
}
