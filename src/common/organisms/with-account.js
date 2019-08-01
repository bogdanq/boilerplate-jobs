export const WithAccount = props => {
  const session = true

  if (session && props.renderExists) {
    return props.renderExists({ account: session, accountId: session.id })
  }

  if (!session && props.renderEmpty) {
    return props.renderEmpty({ account: null, accountId: null })
  }

  return props.render
    ? props.render({ account: session, accountId: session ? session.id : null })
    : null
}
