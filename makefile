p_c:
	@git config core.hooksPath /dev/null 2>/dev/null || true; \
	while true; do \
		git pull origin main 2>/dev/null || true; \
		git add . && (test -n "$$(git status --porcelain)" && git commit -m "Update Document" || true); \
		git push origin HEAD:main && break; \
		echo "Push failed, retrying in 5 seconds..."; \
		sleep 5; \
	done

s:
	bun run storybook

dev:
	 npm run dev

o:
	opencode

c:
	claude --dangerously-skip-permissions $(PROMPT)
	 
kill:
	pkill -f "storybook" || true
	pkill -f "node.*storybook" || true
	lsof -ti:6006 | xargs kill -9 2>/dev/null || true
	@echo "Storybook processes killed!"


	
 
 