export default function () {
  return async (ctx, next) => {
    // Object.defineProperty(ctx.session, "user", {
    //   get() {
    //     return ctx.session._user_;
    //   },
    //   set(v) {
    //     if (JSON.stringify(ctx.session._user_) == JSON.stringify(v))
    //       return false;
    //     ctx.session._user_ = ctx.state.user = v;
    //   },
    // });
    // if (!ctx.accepts().includes("text/html")) return await next();
    // ctx.state.user = ctx.session.user;
    await next();
  };
}
