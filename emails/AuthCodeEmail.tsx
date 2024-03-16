import {
  Tailwind,
  Button,
  Head,
  Font,
  Text,
  Container,
} from "@react-email/components";

interface AuthCodeEmailProps {
  authLink: string;
}

export default function AuthCodeEmail({ authLink }: AuthCodeEmailProps) {
  return (
    <Tailwind>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>
      <Container className="text-center">
        <Text className="text-2xl">Подтверждение регистрации аккаунта</Text>
        <Button
          className="rounded-md bg-[#6366f1] px-[0.875rem] py-[0.625rem] text-sm leading-5 text-white font-medium"
          href={authLink}
        >
          Подтвердить аккаунт
        </Button>
      </Container>
    </Tailwind>
  );
}
