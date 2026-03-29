(define-trait pmll-vault-trait
  (
    ;; Store memory entry
    (store (key (buff 32)) (value (buff 256)))
      (response bool uint)

    ;; Retrieve memory entry
    (get (key (buff 32)))
      (response (optional (buff 256)) uint)
  )
)
