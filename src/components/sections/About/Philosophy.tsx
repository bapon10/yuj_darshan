export default function Philosophy() {
  return (
    <div className="mt-24">

      <div
        className="
          grid
          gap-12
          md:grid-cols-2
          text-center
        "
      >
        <div>
          <h3 className="text-3xl text-terracotta font-heading">
            Yuj
          </h3>

          <p
            className="
              mt-4
              text-sm
              uppercase
              tracking-[0.18em]
              text-sage
            "
          >
            To yoke · To unite
          </p>
        </div>

        <div>
          <h3 className="text-3xl text-terracotta font-heading">
            Darshan
          </h3>

          <p
            className="
              mt-4
              text-sm
              uppercase
              tracking-[0.18em]
              text-sage
            "
          >
            To see · A vision · A way of seeing
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="h-px w-24 bg-sand"></div>
      </div>

      <blockquote
        className="
          mx-auto
          mt-16
          max-w-2xl
          text-center
          text-3xl
          leading-relaxed
          text-ink
          font-heading
        "
      >
        A vision of union:
        <br />
        with the self,
        <br />
        and through the self,
        <br />
        with all things.
      </blockquote>

    </div>
  );
}