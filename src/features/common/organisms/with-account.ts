type Params = {
  account: {
    id: number
  } | null
  accountId?: number | null
}

type rendefunction = ({ account, accountId }: Params) => JSX.Element

type Props = {
  renderExists?: rendefunction
  renderEmpty?: rendefunction
  render?: rendefunction
}

export const WithAccount = ({ renderExists, renderEmpty, render }: Props) => {
  const session = { id: 1212121212 }

  if (session && renderExists) {
    return renderExists({ account: session, accountId: session.id })
  }

  if (!session && renderEmpty) {
    return renderEmpty({ account: null, accountId: null })
  }

  return render
    ? render({ account: session, accountId: session ? session.id : null })
    : null
}
