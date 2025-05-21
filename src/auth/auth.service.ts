async validateUser(email: string, password: string): Promise<string | null> {
  const user = await this.prisma.usuario.findUnique({ where: { email } });

  if (user && await bcrypt.compare(password, user.senha)) {
    const payload = {
      sub: user.id,
      email: user.email
    };

    return this.jwtService.sign(payload);
  }

  return null;
}
