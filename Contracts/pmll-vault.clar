(use-trait vault-trait .pmll-traits.pmll-vault-trait)

(define-map memory-store
  ((key (buff 32)))
  ((value (buff 256)))
)

(define-public (store (key (buff 32)) (value (buff 256)))
  (begin
    (map-set memory-store { key: key } { value: value })
    (ok true)
  )
)

(define-read-only (get (key (buff 32)))
  (match (map-get? memory-store { key: key })
    entry (ok (some (get value entry)))
    (ok none)
  )
)
