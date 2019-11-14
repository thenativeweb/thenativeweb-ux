class ExecutionEnvironmentService {
  public canUseDom: boolean;

  public constructor () {
    this.canUseDom = Boolean(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    );
  }
}

export { ExecutionEnvironmentService };
