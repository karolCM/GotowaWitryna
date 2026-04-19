# Coolify Installation Plan
**Server:** ubuntu@51.68.235.51 (ns3124934)
**Date:** 2026-04-01

## Current Server Status ✅

### System Configuration
- **OS:** Ubuntu 24.04.4 LTS (Noble Numbat)
- **RAM:** 31GB total (27GB available)
- **Disk:** 218GB total (182GB available, 13% used)
- **Uptime:** 15 days
- **Docker:** ✅ Installed (v29.3.0)

### Current Services
- PostgreSQL on 127.0.0.1:5432 (local only)
- Application on port 3002
- SSH on port 22

### Security Status
- **Firewall:** ⚠️ UFW inactive (needs configuration)
- **Ports to secure:** 80, 443, 3000 (Coolify UI)

---

## Installation Steps

### Phase 1: Pre-installation Setup (5 min)

#### 1. Install Docker Compose
```bash
sudo apt update
sudo apt install docker-compose-plugin -y
```

#### 2. Configure Firewall
```bash
# Enable UFW
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 3000/tcp  # Coolify UI (optional)
sudo ufw --force enable
```

#### 3. Create Coolify Directory
```bash
mkdir -p ~/coolify
cd ~/coolify
```

---

### Phase 2: Install Coolify (5 min)

#### Option A: Using Coolify's Install Script (Recommended)
```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

#### Option B: Manual Docker Compose Setup
Create `docker-compose.yml`:
```yaml
version: "3.8"
services:
  coolify:
    image: coollabsio/coolify:latest
    container_name: coolify
    restart: always
    ports:
      - "80:80"
      - "443:443"
      - "3000:3000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - coolify-db:/var/lib/coolify/db
      - coolify-apps:/var/lib/coolify/apps
    environment:
      - APP_URL=http://51.68.235.51
      - DB_TYPE=sqlite
```

---

### Phase 3: Configuration (10 min)

#### 1. Access Coolify UI
- Open browser: `http://51.68.235.51:3000`
- Create admin account
- Configure initial settings

#### 2: Domain Setup (Recommended)
- Point domain A record to `51.68.235.51`
- Configure in Coolify settings
- Enable SSL/Let's Encrypt

#### 3. Configure Resources
- Check Docker resources allocation
- Set up backup strategy
- Configure database backups

---

### Phase 4: Security Hardening (5 min)

#### 1. SSL/HTTPS Setup
```bash
# Coolify will auto-generate Let's Encrypt certificates
# Configure in Coolify UI under Settings > SSL
```

#### 2. SSH Key Management
```bash
# Ensure your SSH key is properly configured
cat ~/.ssh/id_rsa_openssh.pub | sudo tee -a /var/lib/coolify/keys
```

#### 3. Firewall Verification
```bash
sudo ufw status verbose
```

---

### Phase 5: Deploy First Application (Testing)

1. **Connect Git Repository**
   - Add GitHub/GitLab/Bitbucket token
   - Import repository

2. **Create Application**
   - Select application type (Node.js, Python, static, etc.)
   - Configure build settings
   - Set environment variables

3. **Deploy**
   - Push to trigger deployment
   - Monitor logs
   - Test application

---

## Post-Installation Checklist

### Security
- [ ] Firewall configured and enabled
- [ ] SSL certificates installed
- [ ] SSH access secured
- [ ] Admin account created with strong password
- [ ] Regular backups configured

### Monitoring
- [ ] Set up monitoring (Coolify provides built-in)
- [ ] Configure log rotation
- [ ] Set up alerts for failures

### Maintenance
- [ ] Document backup/restore procedures
- [ ] Schedule regular updates
- [ ] Configure automatic SSL renewal

---

## Estimated Time
- **Total installation:** 25-35 minutes
- **Phase 1:** 5 minutes
- **Phase 2:** 5 minutes
- **Phase 3:** 10 minutes
- **Phase 4:** 5 minutes
- **Phase 5:** 5-10 minutes

---

## Potential Issues & Solutions

### Issue 1: Port Conflicts
**Problem:** Port 3002 already in use
**Solution:** Coolify uses different ports, but verify no conflicts

### Issue 2: Docker Permissions
**Problem:** Ubuntu user needs Docker permissions
**Solution:**
```bash
sudo usermod -aG docker ubuntu
newgrp docker
```

### Issue 3: PostgreSQL Conflict
**Problem:** Local PostgreSQL might conflict
**Solution:** Coolify manages its own databases, keep local one separate

### Issue 4: Firewall Blocking
**Problem:** UFW blocking Coolify
**Solution:** Ensure ports 80, 443, 3000 are open

---

## Resources
- **Coolify Docs:** https://coolify.io/docs
- **GitHub:** https://github.com/coollabsio/coolify
- **Discord Community:** https://discord.coollabs.io

---

## Next Steps
1. Review this plan
2. Approve installation
3. Execute installation steps
4. Configure domain (if available)
5. Deploy first application

**Ready to proceed?** Let me know if you want to:
- Start the installation immediately
- Modify any steps
- Ask questions about the plan
